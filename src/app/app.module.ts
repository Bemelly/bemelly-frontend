import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layaouts/auth-layout/auth-layout.component';
import { NavbarComponent } from './layaouts/components/navbar/navbar.component';
import { FooterComponent } from './layaouts/components/footer/footer.component';
import { BemellyappLayoutComponent } from './layaouts/bemellyapp-layout/bemellyapp-layout.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { ProfesionalprofileComponent } from './profesionalprofile/profesionalprofile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';





@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    NavbarComponent,
    FooterComponent,
    BemellyappLayoutComponent,
    ProfesionalprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
