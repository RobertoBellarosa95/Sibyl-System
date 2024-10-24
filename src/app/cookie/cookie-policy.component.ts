import { Component } from '@angular/core';
import { DynamicDialogService } from '../dialog/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  template: `
    <ng-template [ngTemplateOutlet]="cookie"></ng-template>
    <ng-template #cookie>
      <div style=";color: black !important;font-size: 16px !important;">
        <div>
          <div>
            <div>
              <p>
                We and selected third parties use cookies or similar
                technologies for technical purposes and, with your consent, for
                the purposes of
                <strong
                  >functionality, experience, measurement, and marketing
                  (including personalized ads)</strong
                >
                as specified in the
                <a href="javascript:void(0);" (click)="goToPrivacyPolicy()"
                  >cookie policy</a
                >.
              </p>
              <p>
                Regarding advertising, we and selected
                <!-- <button>third parties</button>  -->
                may use
                <em
                  >precise geolocation data and actively scan device
                  characteristics</em
                >, in order to
                <em>store and/or access information on a device</em>
                and process personal data like your usage data for the following
                <!-- <button>advertising purposes</button>: -->
                advertising purposes:
                <em
                  >personalized ads and content, ad and content measurement,
                  audience insights and product development.</em
                >
              </p>
              <p>
                You can freely give, refuse, or revoke your consent at any time
                by accessing the preferences panel. If you consent, it will only
                apply to this domain. Refusing consent may render related
                functions unavailable.
              </p>
              <p>
                Use the "Accept" button to consent. Close this notice to
                continue without accepting.
              </p>
            </div>
            <div style="color:#000!important;">
              <div class="d-flex justify-content-end gap-3">
                <button type="button" class="btn btn-danger " (click)="close()">
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  (click)="acceptCookies()"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: [``],
})
export class CookieBannerComponent {
  constructor(private _dialog: DynamicDialogService, private _router: Router) {}

  acceptCookies(): void {
    // Set flag in local storage indicating that cookies have been accepted
    localStorage.setItem('cookiesAccepted', 'true');
    this._dialog.ref?.close();
  }

  close(): void {
    localStorage.setItem('cookiesAccepted', 'false');
    this._dialog.ref?.close();
  }

  goToPrivacyPolicy() {
    const url = this._router.serializeUrl(
      this._router.createUrlTree(['/privacy-policy'])
    );
    window.open(url, '_blank');
  }
}
