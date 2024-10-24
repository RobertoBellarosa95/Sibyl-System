import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Person } from '../model/person.model';
import { OrchestratorService } from '../service/orchestrator.service';
import { PrintService } from '../service/print.service';
import { SimulationService } from '../service/simulation.service';

@Component({
  selector: 'app-sybil',
  template: `<div class="container-fluid">
      <div class="row mb-4">
        <ng-container *ngFor="let person of this.orch.orchestrator$ | async">
          <div class="col p-2">
            <app-panel
              title="{{ person.name }}"
              from="{{ person.role }}"
              name="{{ person.name }}"
              text="{{ person.response }}"
              [sentences]="person.sentences"
            ></app-panel>
          </div>
        </ng-container>
      </div>
    </div>
    <div id="sibyl-button-mobile-group">
      <div class="row p-4 pl-2 pr-2 pb-2 pt-2">
        <button
          type="button"
          class="dark-button"
          (click)="this.simulation.simulate()"
        >
          SIMULATE
        </button>
      </div>
      <div class="row p-4 pl-2 pr-2 pb-2">
        <button
          type="button"
          class="btn btn-danger"
          (click)="this.stopGeneration()"
        >
          STOP
        </button>
      </div>
      <div class="row p-4 pl-2 pr-2 pb-2">
        <button type="button" class="dark-button" (click)="print()">
          PRINT CONVERSATION
        </button>
      </div>
    </div>
    <div id="sibyl-button-desktop-group" class="row p-4">
      <div class="col-7"></div>
      <div class="col-5 d-flex justify-content-end gap-3">
        <button
          type="button"
          class="dark-button"
          (click)="this.simulation.simulate()"
        >
          SIMULATE
        </button>
        <button
          type="button"
          class="btn btn-danger"
          (click)="this.stopGeneration()"
        >
          STOP
        </button>
        <button type="button" class="dark-button" (click)="print()">
          PRINT CONVERSATION
        </button>
      </div>
      <!-- <app-conversation *ngIf="!production"></app-conversation>  -->
    </div> `,
})
export class SibylComponent implements OnInit {
  production: boolean = false;
  persons: Person[] = [];
  stop = false;

  constructor(
    protected orch: OrchestratorService,
    private _print: PrintService,
    protected simulation: SimulationService
  ) {
    this.production = environment.production;
  }

  async ngOnInit() {
    await this.setupDefaultConfiguration();
  }

  private async setupDefaultConfiguration() {
    window.sessionStorage.setItem('conversation', JSON.stringify([]));
    if (!window.sessionStorage.getItem('persons')) {
      this.persons = await this.orch.getInitialSetup();
      window.sessionStorage.setItem('persons', JSON.stringify(this.persons));
    }
    if (!window.localStorage.getItem('configuration')) {
      const defaultConfiguration =
        await this.simulation.getDefaultConfiguration();
      window.localStorage.setItem(
        'configuration',
        JSON.stringify(defaultConfiguration)
      );
    }
  }

  async stopGeneration() {
    this.persons = await this.orch.getInitialSetup();
    window.sessionStorage.setItem('persons', JSON.stringify(this.persons));
    this.simulation.stopGeneration();
    this.simulation.seed$.next('');
    this.setupDefaultConfiguration();
    this.stop = true;
    window.location.reload();
  }

  print() {
    const conversation: string[] = JSON.parse(
      window.sessionStorage.getItem('conversation') || ''
    );
    let s = '';
    conversation.forEach((person) => {
      s += `${person}\n`;
    });
    this._print.downloadTextFile(s);
  }
}
