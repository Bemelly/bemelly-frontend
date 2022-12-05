import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component'; 
import { AuthLayoutComponent } from './layaouts/auth-layout/auth-layout.component';
import { BemellyappLayoutComponent } from './layaouts/bemellyapp-layout/bemellyapp-layout.component';
import { ProfesionalprofileComponent } from './profesionalprofile/profesionalprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: BemellyappLayoutComponent,
    children: [
      {
        path: 'hola',
        loadChildren: ()=> import('./home/home.module').then((m)=>m.HomeModule)
      },
      {
        path: 'crearPublicacion',
        loadChildren: ()=> import('./publication/publication.module').then((m)=>m.PublicationModule)
      }
    ]
  },
  {
    path: 'users',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('./auth/auth.module').then((m)=>m.AuthModule)
      }
    ]
  },
{
  path: '',
  component: LandingComponent,
},
{
  path: 'userprofile',
  component: ProfileComponent,
},
{
  path: 'profesionals',
  component: ProfesionalprofileComponent,
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
