import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  constructor(private _router: Router, public authService: AuthService) {}

  ngOnInit() {}

  goToSignIn() {
    this._router.navigate(['sign-in']);
  }
}
