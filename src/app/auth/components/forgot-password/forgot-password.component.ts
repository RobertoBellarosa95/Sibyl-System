import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
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
              <h2 class="text-center mb-4">Reset Password</h2>
              <form>
                <div class="form-group">
                  <p class="text-center">
                    Please enter your email address to request a password reset.
                  </p>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    #passwordResetEmail
                    id="username"
                    pInputText
                    required
                  />
                </div>

                <div class="d-flex gap-4 mt-3 mb-2">
                  <!-- Calling ForgotPassword from AuthService Api -->
                  <input
                    type="submit"
                    class="btn btn-primary"
                    id="pwd"
                    value="Reset Password"
                    (click)="
                      authService.ForgotPassword(passwordResetEmail.value)
                    "
                  />
                </div>
              </form>
              <span
                >Go back to ?
                <a href="javascript:void(0);" (click)="goBackToLogIn()"
                  >Log In</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private _router: Router, public authService: AuthService) {}

  ngOnInit() {}

  goBackToLogIn() {
    this._router.navigate(['sign-in']);
  }
}
