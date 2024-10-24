import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { DynamicDialogService } from 'src/app/dialog/dialog.service';
import { Configuration } from '../component/configurator.component';
import { Person } from '../model/person.model';
import { MessageService } from './chatgpt.service';
import { OrchestratorService } from './orchestrator.service';
import { SpeakService } from './speak.service';

@Injectable({ providedIn: 'root' })
export class SimulationService {
  seed$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  stop = false;
  constructor(
    protected orch: OrchestratorService,
    private _message: MessageService,
    private _speak: SpeakService,
    private _dialog: DynamicDialogService
  ) {}

  async showMessagesIncrementally(persons: Person[]) {
    const personsStored: Person[] = JSON.parse(
      window.sessionStorage.getItem('persons') || ''
    );

    for (const person of persons) {
      const existingPerson = personsStored.find((p) => p.id === person.id);
      if (existingPerson) {
        existingPerson.response = person.response;
        const personRow = `${person.response} ${moment(new Date()).format(
          'DD/MM/YYYY HH:mm:ss'
        )}`;
        // await this._speak.speak(existingPerson.response);
        if (!existingPerson.sentences.includes(person.response)) {
          existingPerson.sentences.push(personRow);
        }
        const conversation: string[] = JSON.parse(
          window.sessionStorage.getItem('conversation') || '[]'
        );
        conversation.push(`${person.name.toUpperCase()}: ${personRow}`);
        window.sessionStorage.setItem(
          'conversation',
          JSON.stringify(conversation)
        );
      }

      // Aggiungi un ritardo di 3000 millisecondi prima di procedere con la prossima iterazione
      this.orch.orchestrator$.next(personsStored);
      window.sessionStorage.setItem('persons', JSON.stringify(personsStored));
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }

  async start(
    configuration: Configuration,
    persons: Person[],
    counter: { i: number }
  ) {
    const seed = this.getSeed(configuration, persons, counter.i);
    this.seed$.next(seed);
    const result = await this._message.sendMessage(seed);
    let conversation = JSON.parse(result.choices[0].message.content);
    const key = Object.keys(conversation).at(0) || '';
    persons = conversation[key];
    const data: Person[] = JSON.parse(
      window.sessionStorage.getItem('data') || ''
    );
    data.push(...persons);
    window.sessionStorage.setItem('data', JSON.stringify(data));
    if (counter) {
      counter.i += 1;
    }
    await this.showMessagesIncrementally(persons);
  }

  async getDefaultConfiguration() {
    const conf: Configuration = {
      brain: 2,
      discussion: 'wether',
    };
    return conf;
  }

  async simulate() {
    // Check if user provided api key to call ai services
    if (!(await this.checkForApiKey())) {
      return;
    }

    const conf: Configuration = JSON.parse(
      window.localStorage.getItem('configuration') || ''
    );

    const persons: Person[] = JSON.parse(
      window.sessionStorage.getItem('persons') || ''
    );

    window.sessionStorage.setItem('data', JSON.stringify([]));

    this.orch.orchestrator$.next(persons);

    const counter = { i: 0 };

    while (!this.stop) {
      await this.start(conf, persons, counter);
    }
  }

  stopGeneration() {
    this.stop = true;
  }

  getSeed(configuration: Configuration, persons: Person[], counter: number) {
    const sample = {
      brains: [
        {
          id: 0,
          name: 'John Brown',
          response: 'Hi!',
          sentences: [],
          role: '',
        },
        {
          id: '',
          name: 'Antonio Rossi',
          response: 'Sto bene, grazie!',
          sentences: [],
          role: '',
        },
      ],
    };

    let seed = '';
    if (counter > 0) {
      seed = `You have the task of simulating ${
        configuration.brain
      } defined entities talking to each other this is the json ${JSON.stringify(
        persons
      )} you must return the json in the format of
        example: ${JSON.stringify(sample)}
        with the same fields.
       The conversation must have a random order of the ids with respect to the passed json.
       The field you must use is response for each element of the array. 
       Continue simulating the conversations by having these as the context
       ${JSON.stringify(
         window.sessionStorage.getItem('data')
       )}, carrying on the conversation based on these.
       The topic of the conversation is ${configuration.discussion}
       `;
    } else {
      seed = `You have the task to simulate ${
        configuration.brain
      } defined entities talking to each other this is the json ${JSON.stringify(
        persons
      )} you must return with the json in the format,
      example: ${JSON.stringify(sample)}
      with the same fields,
     you can extend the conversation as you wish, 
     the conversation must have a random order of the ids with respect to the passed json,
     the field you will need to use is response for each element in the array. 
     An entity will start randomly now with the sentence: """How are you?""" if ${
       configuration.brain
     } is greater than 2 otherwise """how are you?""" Today we are talking about ${
        configuration.discussion
      }.`;
    }
    window.sessionStorage.setItem('seed', seed);
    return seed;
  }

  async checkForApiKey() {
    const apikey = window.localStorage.getItem('apikey');
    if (!apikey) {
      await firstValueFrom(
        this._dialog.open(DialogComponent, {
          data: {
            message:
              'You must provide an api key, go to configurator section to provide it',
            alert: 'true',
          },
          header: 'Warning',
          width: '25vw',
          closable: false,
        })
      );
      return false;
    }
    return true;
  }
}
