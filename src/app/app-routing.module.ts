import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component'; 
import { BemellyappLayoutComponent } from './layaouts/bemellyapp-layout/bemellyapp-layout.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent
},
{
  path: 'home',
  component: BemellyappLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
