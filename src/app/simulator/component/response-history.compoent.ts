import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-history',
  template: `
    <p-overlayPanel #op>
      <ng-container *ngFor="let s of sentences">
        <div>{{ s }}</div>
      </ng-container>
    </p-overlayPanel>
    <button
      type="button"
      class="btn btn-outline-info"
      (click)="op.toggle($event)"
    >
      Interventions&nbsp;<i class="pi pi-history"></i>
    </button>
  `,
})
export class ResponseHistoryComponent implements OnInit {
  @Input() sentences: string[] = [];
  constructor() {}

  ngOnInit() {}
}
