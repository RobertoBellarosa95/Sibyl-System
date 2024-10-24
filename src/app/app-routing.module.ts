import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './auth/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './auth/components/verify-email/verify-email.component';
import { AuthGuard } from './auth/shared/guard/auth.guard';
import { MainComponent } from './main.component';
import { SimprotoComponent } from './simulator/service/simproto.component';
import { PrivacyPolicyComponent } from './cookie/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: 'simulator', pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'simulator',
        loadChildren: () =>
          import('./simulator/simulator.module').then((m) => m.SimulatorModule),
      },
    ],
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'simproto', component: SimprotoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
