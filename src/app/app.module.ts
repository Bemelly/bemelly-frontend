import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layaouts/auth-layout/auth-layout.component';
import { NavbarComponent } from './layaouts/components/navbar/navbar.component';
import { FooterComponent } from './layaouts/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
