import { Component, OnInit } from '@angular/core';
import { SimulationService } from '../service/simulation.service';
import { OrchestratorService } from '../service/orchestrator.service';

@Component({
  selector: 'app-conversation',
  template: `
    <div class="container-fluid mt-4" style="background-color: red;">
      <div class="row">
        <div class="col-6">
          <h3>Seed</h3>
          <textarea
            rows="10"
            cols="80"
            pInputTextarea
            [(ngModel)]="seed"
          ></textarea>
        </div>
        <div class="col-6">
          <h3>Conversation</h3>
          <textarea
            rows="10"
            cols="80"
            pInputTextarea
            [(ngModel)]="persons"
          ></textarea>
        </div>
      </div>
    </div>
  `,
})
export class ConversationComponent implements OnInit {
  seed: string = '';
  persons: string = '';
  constructor(
    private _simulation: SimulationService,
    private _orch: OrchestratorService
  ) {}

  ngOnInit() {
    this._simulation.seed$.subscribe((seed) => (this.seed = seed));
    this._orch.orchestrator$.subscribe(
      (persons) => (this.persons = JSON.stringify(persons))
    );
  }
}
