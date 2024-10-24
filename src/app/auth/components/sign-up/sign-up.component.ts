import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  template: `
    <div class="d-flex justify-content-center mt-4">
      <h1>Sibyl System</h1>
    </div>
    <div class="d-flex justify-content-center mt-2 text-center">
      <h5>
        <u>
          A Conversation Simulation System (CSS)<br />
          designed to facilitate and analyze interactions
          <br />
          between a configurable number of entities on a specified theme.
        </u>
      </h5>
    </div>
    <div class="container-fluid h-75">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="card">
            <div class="card-body">
              <h2 class="text-center mb-4">Sign Up</h2>
              <form>
                <div class="form-group">
                  <label for="email">Username:</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    id="username"
                    #userEmail
                    pInputText
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="email">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    pInputText
                    id="pwd"
                    #userPwd
                    required
                  />
                </div>
                <div class="d-flex gap-4 mt-3 mb-2">
                  <button
                    type="button"
                    class="btn btn-primary btn-block"
                    (click)="authService.SignUp(userEmail.value, userPwd.value)"
                  >
                    Sign Up
                  </button>

                  <!-- Continue with Google -->
                  <button
                    type="button"
                    class="btn btn-primary btn-block"
                    (click)="authService.GoogleAuth()"
                  >
                    <i class="fab fa-google-plus-g"></i>
                    Continue with Google
                  </button>
                </div>
              </form>
              <span (click)="goToSingIn()"
                >Already have an account?
                <a href="javascript:void(0);" routerLink="/">Log In</a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SignUpComponent implements OnInit {
  constructor(private _router: Router, public authService: AuthService) {}

  ngOnInit() {}

  goToSingIn() {
    this._router.navigate(['sign-in']);
  }
}
