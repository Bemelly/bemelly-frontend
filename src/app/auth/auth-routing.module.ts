import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MakepublicationComponent } from './makepublication/makepublication.component';
import { ShowpublicationComponent } from './showpublication/showpublication.component';
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
{
  path: 'showpublication',
  component: ShowpublicationComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
