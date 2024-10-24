import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';

@NgModule({
  imports: [NgIf, DynamicDialogModule, DialogModule, ButtonModule],
  exports: [DialogComponent],
  declarations: [DialogComponent],
  providers: [DialogService],
})
export class AppDialogModule {}
