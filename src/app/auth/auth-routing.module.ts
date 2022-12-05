import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MakepublicationComponent } from './makepublication/makepublication.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent
},

{
  path: 'signup',
  component: SignupComponent,
},

{
  path: 'makepublication',
  component: MakepublicationComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
