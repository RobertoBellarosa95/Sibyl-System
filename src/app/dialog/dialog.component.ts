import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-custom-dialog',
  template: `
    <p>{{ message }}</p>
    <div class="col d-flex justify-content-end gap-3">
      <button
        type="button"
        class="btn btn-secondary"
        type="button"
        (click)="close()"
      >
        CLOSE
      </button>
      <ng-container *ngIf="!alert">
        <button
          type="button"
          class="btn btn-primary"
          type="button"
          (click)="confirm()"
        >
          CONFIRM
        </button>
      </ng-container>
    </div>
  `,
})
export class DialogComponent implements OnInit {
  message = '';
  alert = true;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  display: boolean = false;

  ngOnInit(): void {
    this.message = this.config.data['message'];
    this.alert = this.config.data['alert'];
  }

  close() {
    this.ref.close();
  }

  confirm() {
    this.ref.close(true);
  }
}
