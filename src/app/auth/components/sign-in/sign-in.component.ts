import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  template: `
    <div class="d-flex justify-content-center mt-4">
      <h1>
        <img
          src="assets/img/sibyl-system-logo.png"
          width="115px"
          height="115px"
          alt="Sibyl System Logo"
        />&nbsp;Sibyl System
      </h1>
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
              <h2 class="text-center mb-4">Sign In</h2>
              <form>
                <div class="form-group">
                  <label for="email">Username:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    id="username"
                    #userName
                    pInputText
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input
                    type="password"
                    pInputText
                    id="pwd"
                    class="form-control"
                    placeholder="Password"
                    pInputText
                    #userPassword
                    required
                  />
                </div>
                <!-- Calling SignIn Api from AuthService -->
                <div class="d-flex gap-4 mt-3 mb-2">
                  <button
                    type="button"
                    class="btn btn-primary btn-block"
                    (click)="
                      authService.SignIn(userName.value, userPassword.value)
                    "
                  >
                    Log In
                  </button>
                  <!-- Calling GoogleAuth Api from AuthService -->
                  <button
                    type="button"
                    class="btn btn-primary btn-block"
                    (click)="this.authService.GoogleAuth()"
                  >
                    <i class="fab fa-google-plus-g"></i>
                    Log in with Google
                  </button>
                </div>
              </form>
              <span
                >Don't have an account?<a
                  href="javascript:void(0);"
                  (click)="goToNewUser()"
                >
                  Sign Up</a
                ></span
              >
            </div>
          </div>
          <div class="text-center mt-3 text-white">
            <a href="javascript:void(0);" (click)="goToForgotPassword()"
              >Forgot Password?</a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class SignInComponent implements OnInit {
  constructor(private _router: Router, public authService: AuthService) {}

  ngOnInit() {}

  goToNewUser() {
    this._router.navigate(['/register-user']);
  }

  goToForgotPassword() {
    this._router.navigate(['/forgot-password']);
  }
}
