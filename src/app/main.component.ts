import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/shared/services/auth.service';
import { CookieService } from './cookie/cookie.service';

@Component({
  selector: 'app-main',
  template: `
    <div class="layout-wrapper">
      <app-header></app-header>

      <div class="sidebar" *ngIf="showSidebar">
        <p-sidebar [(visible)]="showSidebar" position="left" [modal]="true">
          <h3>Menu</h3>
          <div>
            <a routerLink="/simulator"><h5>Home</h5></a>
          </div>
          <div>
            <a routerLink="/simulator/configurator"><h5>Configurator</h5> </a>
          </div>
          <div>
            <a routerLink="/simulator/info"><h5>Info & Contact</h5> </a>
          </div>
          <div>
            <a href="javascript:void(0);" (click)="logout()"><h5>Logout</h5></a>
          </div>
          <div>
            <a href="javascript:void(0);" (click)="goToPrivacyPolicy()"
              >Privacy policy</a
            >
          </div>
        </p-sidebar>
      </div>

      <button
        type="button"
        class="btn btn-primary menu-btn"
        (click)="showSidebar = true"
      >
        <i class="pi pi-bars"></i>
      </button>

      <div class="content">
        <router-outlet></router-outlet>
      </div>

      <div class="footer">
        <i><h5>"Nec mortale sonans."</h5></i>
      </div>
    </div>
    <app-loader></app-loader>
  `,
})
export class MainComponent implements OnInit {
  title = 'sibyl-system';
  showSidebar = false;
  constructor(
    protected auth: AuthService,
    private _cookie: CookieService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._cookie.checkCookie();
  }

  goToPrivacyPolicy() {
    const url = this._router.serializeUrl(
      this._router.createUrlTree(['/privacy-policy'])
    );
    window.open(url, '_blank');
  }

  logout() {
    this.auth.logout();
  }
}
