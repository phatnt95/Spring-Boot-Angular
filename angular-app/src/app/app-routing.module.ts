import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'account', component: AccountComponent },

  { path: 'home', component: HomeComponent, /*canActivate: [AuthGuardService]*/ }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
