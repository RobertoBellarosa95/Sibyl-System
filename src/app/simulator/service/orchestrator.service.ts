import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../model/person.model';
import { SHA256Service } from './sha256.service';

@Injectable({ providedIn: 'root' })
export class OrchestratorService {
  private initialSetup: Person[] = [
    {
      id: '',
      name: 'Parent',
      response: '',
      sentences: [],
      role: 'parent',
    },
    {
      id: '',
      name: 'Child',
      response: '',
      sentences: [],
      role: 'child',
    },
  ];
  orchestrator$: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>(
    this.initialSetup
  );

  person$: BehaviorSubject<Person> = new BehaviorSubject<Person>(new Person());

  constructor(private _sha256: SHA256Service) {}

  resetOrchestrator() {
    this.orchestrator$ = new BehaviorSubject<Person[]>(this.initialSetup);
  }

  async getInitialSetup() {
    const id1 = await this._sha256.generateId();
    const id2 = await this._sha256.generateId();
    return [
      {
        id: id1,
        name: 'Parent',
        response: '',
        sentences: [],
        role: 'parent',
      },
      {
        id: id2,
        name: 'Child',
        response: '',
        sentences: [],
        role: 'child',
      },
    ];
  }
}
