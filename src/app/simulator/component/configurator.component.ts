import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { DynamicDialogService } from 'src/app/dialog/dialog.service';
import { Person } from '../model/person.model';
import { SHA256Service } from '../service/sha256.service';

@Component({
  selector: 'app-configurator',
  template: `
    <div class="container-fluid">
      <h5 style="color: whitesmoke;">ChatGPT API KEY:</h5>
      <div class="d-flex mb-4">
        <div class="col d-flex gap-3">
          <input pInputText [(ngModel)]="apikey" placeholder="Type api key" />
          <button
            class="btn btn-primary"
            [disabled]="!apikey"
            type="button"
            (click)="openConfirmApiKeyDialog()"
          >
            SAVE API KEY
          </button>
        </div>
      </div>
      <form [formGroup]="myForm">
        <div class="row mb-4">
          <div class="col">
            <h5 style="color: whitesmoke;">
              Number of brains (min:2 - max: 2601):
            </h5>
            <p-inputNumber
              formControlName="brain"
              [showButtons]="true"
              buttonLayout="horizontal"
              inputId="horizontal"
              spinnerMode="horizontal"
              [step]="1"
              [min]="2"
              [max]="2601"
              placeholder="Number of brain"
              decrementButtonClass="dark-button p-0"
              incrementButtonClass="dark-button p-0"
            ></p-inputNumber>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <h5 style="color: whitesmoke;">Type of discussion:</h5>
            <p-dropdown
              formControlName="discussion"
              [options]="discussion"
              placeholder="Select type of discussion"
            ></p-dropdown>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <h5 style="color: whitesmoke;">
              Custom input discussion (whatever you want!):
            </h5>
            <input
              pInputText
              formControlName="discussion"
              placeholder="Type custom discussion"
            />
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <h5 style="color: whitesmoke;">
              Persons voices (next feature...):
            </h5>
            <p-dropdown
              formControlName="select3"
              [options]="voice"
              placeholder="Select person voice"
            ></p-dropdown>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col d-flex justify-content-end">
            <button
              class="btn btn-primary"
              [disabled]="!myForm.valid"
              type="button"
              (click)="openConfirmDialog()"
            >
              SAVE CONFIGURATION
            </button>
          </div>
        </div>
      </form>
    </div>
  `,
})
export class ConfiguratorComponent implements OnInit {
  myForm: FormGroup;
  apikey = window.localStorage.getItem('apikey') || '';
  discussion = [
    { label: 'Politics', value: 'politics' },
    { label: 'Religion', value: 'religion' },
    { label: 'Sports', value: 'sports' },
    { label: 'Technology', value: 'technology' },
    { label: 'Art and Culture', value: 'art_and_culture' },
    { label: 'Science', value: 'science' },
    { label: 'Economics', value: 'economics' },
    { label: 'Education', value: 'education' },
    { label: 'Environment', value: 'environment' },
    { label: 'Health', value: 'health' },
  ];

  voice = [{ label: 'Coming soon...', value: 0 }];

  constructor(
    private _sha256: SHA256Service,
    private fb: FormBuilder,
    private _dialog: DynamicDialogService
  ) {
    const configuration: Configuration = JSON.parse(
      window.localStorage.getItem('configuration') || ''
    );
    this.myForm = this.fb.group({
      brain: [configuration?.brain, Validators.required],
      discussion: [configuration?.discussion, Validators.required],
      apikey: [null],
      select3: [null],
    });
  }

  ngOnInit(): void {}

  async openConfirmApiKeyDialog() {
    const result = await firstValueFrom(
      this._dialog.open(DialogComponent, {
        data: { message: 'Save this api key?' },
        header: 'Warning',
        width: '25vw',
        closable: false,
      })
    );
    if (result) {
      window.localStorage.setItem('apikey', this.apikey);
    }
  }

  async openConfirmDialog() {
    const result = await firstValueFrom(
      this._dialog.open(DialogComponent, {
        data: { message: 'Save this configuration?' },
        header: 'Warning',
        width: '25vw',
        closable: false,
      })
    );
    if (result && this.myForm.valid) {
      const configuration: Configuration = {
        brain: this.myForm.value['brain'],
        discussion: this.myForm.value['discussion'],
      };

      const persons: Person[] = [];
      for (let index = 0; index < configuration.brain; index++) {
        const id = await this._sha256.generateId();
        let person: Person = {
          id: id,
          name: this.generateGlobalName(),
          response: '',
          sentences: [],
          role: '',
        };
        persons.push(person);
      }

      window.localStorage.setItem(
        'configuration',
        JSON.stringify(configuration)
      );

      window.sessionStorage.setItem('persons', JSON.stringify(persons));
    } else {
      // Gestisci l'errore
      throw new Error('Configuration form not valid!');
    }
  }

  generateGlobalName(): string {
    // Definire un tipo per gli oggetti contenenti nomi e cognomi
    type LinguaNomi = {
      [key: string]: { nomi: string[]; cognomi: string[] };
    };

    // Oggetto contenente array di nomi e cognomi per diverse lingue
    const nomiPerLingua: LinguaNomi = {
      inglese: {
        nomi: ['James', 'Mary', 'John', 'Patricia', 'Robert'],
        cognomi: ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'],
      },
      cinese: {
        nomi: ['王', '李', '张', '刘', '陈'],
        cognomi: ['伟', '芳', '娜', '秀英', '敏'],
      },
      giapponese: {
        nomi: ['太郎', '次郎', '花子', '優子', '隆'],
        cognomi: ['田中', '鈴木', '高橋', '伊藤', '渡辺'],
      },
      italiano: {
        nomi: ['Giuseppe', 'Giovanni', 'Antonio', 'Maria', 'Anna'],
        cognomi: ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi'],
      },
      tedesco: {
        nomi: ['Hans', 'Peter', 'Thomas', 'Klaus', 'Helga'],
        cognomi: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber'],
      },
    };

    // Seleziona una lingua casualmente
    const lingue = Object.keys(nomiPerLingua);
    const linguaSelezionata = lingue[Math.floor(Math.random() * lingue.length)];

    // Seleziona un nome e un cognome casualmente dalla lingua selezionata
    const nome =
      nomiPerLingua[linguaSelezionata].nomi[
        Math.floor(Math.random() * nomiPerLingua[linguaSelezionata].nomi.length)
      ];
    const cognome =
      nomiPerLingua[linguaSelezionata].cognomi[
        Math.floor(
          Math.random() * nomiPerLingua[linguaSelezionata].cognomi.length
        )
      ];

    return `${nome} ${cognome}`;
  }
}

export class Configuration {
  brain: number;
  discussion: string;

  constructor() {
    this.brain = NaN;
    this.discussion = '';
  }
}
