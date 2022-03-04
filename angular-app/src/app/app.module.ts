import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthHtppInterceptorService } from './auth/auth-htpp-interceptor.service';
import { AuthService } from './auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MdbCustomizeModule } from './mdb-customize/mdb-customize.module';
import { AccountComponent } from './account/account.component';
import { ModalAccountComponent } from './modal-account/modal-account.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    AccountComponent,
    ModalAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    MdbCustomizeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthHtppInterceptorService, multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
