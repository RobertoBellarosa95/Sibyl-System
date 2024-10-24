import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `<div class="header">
    <div class="d-flex justify-content-center">
      <div class="col text-center">
        <h4>Sibyl system</h4>
      </div>
      <i
        class="pi pi-user text-right mt-1"
        style="font-size: 1.5rem; cursor: pointer"
        (click)="goToUserPanel()"
      ></i>
    </div>
  </div> `,
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToUserPanel() {
    this.router.navigate(['dashboard']);
  }
}
