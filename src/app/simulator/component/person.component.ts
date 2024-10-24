import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person',
  template: `
    <p-card header="{{ title }}">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <app-circular-image></app-circular-image>
        </div>
      </div>
      <div class="row p-4 justify-content-start" *ngIf="text">
        <app-response-history [sentences]="sentences"></app-response-history>
      </div>
      <div class="row p-4 justify-content-start" *ngIf="text">
        <p>{{ text }}</p>
      </div>
    </p-card>
  `,
})
export class PersonComponent implements OnInit {
  @Input() title: string = '';
  @Input() name: string = '';
  @Input() from: string = '';
  @Input() text: string = '';
  @Input() sentences: string[] = [];
  constructor() {}

  ngOnInit() {}
}
