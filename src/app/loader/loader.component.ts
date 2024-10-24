import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loader',
  template: `
    <div class="progress-spinner" *ngIf="show">
      <div class="loader"></div>
    </div>
  `,
  styleUrls: ['./loader-component.scss'],
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule],
})
export class LoaderComponent implements AfterViewInit {
  show = false;

  constructor(
    private _loading: LoadingService,
    private _cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this._loading.loadingObservable.subscribe((result: boolean) => {
      this.show = result;
      // Sometimes update 'show' cause a changing error after checked
      this._cd.detectChanges();
    });
  }
}
