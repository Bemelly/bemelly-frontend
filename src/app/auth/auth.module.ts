import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MakepublicationComponent } from './makepublication/makepublication.component';
import { ShowpublicationComponent } from './showpublication/showpublication.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { TagsComponent } from './makepublication/components/tags/tags.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    MakepublicationComponent,
    ShowpublicationComponent,
    TagsComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressBarModule,
  ],
  exports: [LoginComponent],
})
export class AuthModule {}
