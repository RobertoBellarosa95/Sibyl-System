import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  template: ` <ng-container *ngIf="authService.userData as user">
    <div class="d-flex">
      <div class="col-1">
        <img
          class="align-self-start img-thumbnail rounded-circle mb-2"
          src="{{
            user.photoURL ? user.photoURL : '/assets/img/user_icon.png'
          }}"
          alt="{{ user.displayName }}"
        />
      </div>
    </div>
    <div class="d-flex">
      <h2>
        <strong>{{ user.displayName ? user.displayName : 'User' }}</strong>
      </h2>
    </div>
    <div class="d-flex">
      <p>
        Email: <strong>{{ user.email }}</strong>
      </p>
    </div>
    <!-- <div class="d-flex">
      <p>
        First login: <strong>{{ user.createdAt | date }}</strong>
      </p>
    </div>
    <div class="d-flex">
      <p>
        Last login: <strong>{{ user.lastLoginAt | date }}</strong>
      </p>
    </div> -->
  </ng-container>`,
  styles: [],
})
export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
