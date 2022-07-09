import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminendComponent } from './adminend/adminend.component';

import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { UserendComponent } from './userend/userend.component';

const routes: Routes = [
  {path:'',component:HomeComponent,  pathMatch: 'full'},
  {path:'login',component:LoginComponent, canActivate:[LoginGuard]},
  {path:'signup', component:SignupComponent},
  {path:'userend', component:UserendComponent},
  {path: 'adminend', component:AdminendComponent},
  // {path: 'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  // {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
