import { Injectable } from '@angular/core';
import { DynamicDialogService } from '../dialog/dialog.service';
import { firstValueFrom } from 'rxjs';
import { CookieBannerComponent } from './cookie-policy.component';

@Injectable({ providedIn: 'root' })
export class CookieService {
  constructor(private _dialog: DynamicDialogService) {}

  async checkCookie() {
    // Check if cookies have been accepted before
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
    } else {
      const result = await firstValueFrom(
        this._dialog.open(CookieBannerComponent, {
          data: { },
          width: '50vw',
          closable: false,
        })
      );
    }
  }

  
}
