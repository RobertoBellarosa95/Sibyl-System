import { Component, OnInit } from '@angular/core';
import { MessageService } from './chatgpt.service';
import { SimulationService } from './simulation.service';

@Component({
  selector: 'app-simproto',
  template: `<h3>{{ message }}</h3>`,
})
export class SimprotoComponent implements OnInit {
  message = 'Starting the loop...';
  worker = new Worker(new URL('../../app.worker', import.meta.url));

  constructor(
    private _message: MessageService,
    private _simulation: SimulationService
  ) {}

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker.onmessage = ({ data }) => {};

      // Send a message to the worker to start the requests.
      this.worker.postMessage({
        text: 'Hi how are you?',
      });
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      throw new Error('Web workers are not supported in this environment.');
    }
  }
}
