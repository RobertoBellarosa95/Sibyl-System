import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';

import { SidebarModule } from 'primeng/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './component/header.component';
import { MainComponent } from './main.component';
import { SimprotoComponent } from './simulator/service/simproto.component';
import { SimulatorModule } from './simulator/simulator.module';
import { CookieBannerComponent } from './cookie/cookie-policy.component';
import { PrivacyPolicyComponent } from './cookie/privacy-policy.component';
import { LoaderComponent } from './loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loader/loading.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    MainComponent,
    SimprotoComponent,
    CookieBannerComponent,
    PrivacyPolicyComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi : true
    },
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SidebarModule,
    SimulatorModule,
    AuthModule,
    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    LoaderComponent,
  ],
})
export class AppModule {}
