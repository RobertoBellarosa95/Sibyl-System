import { Injectable, Type } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DynamicDialogService {
  ref: DynamicDialogRef | undefined;
  constructor(private _dialog: DialogService) {}
  open<T>(template: Type<T>, config: DynamicDialogConfig) {
    this.ref = this._dialog.open(template, config);
    return this.ref.onClose;
  }
}
