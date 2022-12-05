import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationRoutingModule } from './publication-routing.module';
import { PublicationComponent } from './publication.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './componentes/editor/editor.component';







@NgModule({
  declarations: [
    PublicationComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    PublicationRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FormsModule
  ]
})
export class PublicationModule { }
