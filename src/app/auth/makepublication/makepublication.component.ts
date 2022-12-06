import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PublicationService } from 'src/app/_services/publication.service';


export interface Fruit {
  name: string;
}

/**
 * @title Chips with input
 */

@Component({
  selector: 'app-makepublication',
  templateUrl: './makepublication.component.html',
  styleUrls: ['./makepublication.component.scss']
})
export class MakepublicationComponent {
  
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'hola'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index > 0) {
      this.fruits[index].name = value;
    }
  }

  user: any
  constructor(
    private tokenService: TokenStorageService, 
    private router: Router, 
    private fb: FormBuilder, 
    private publicacionSev: PublicationService
    ){}
  usuario: any = this.tokenService.getUser()
    form = this.fb.group({
      ownerCC: ['', Validators.required],
      serviceName: ['', Validators.required],
      description: ['', Validators.required],
      tags: [[]]

    });
    
    ngOnInit(): void {
      this.user = this.tokenService.getUser()
      console.log(this.user.CC);
      this.form.patchValue({
        ownerCC: this.user.CC,
      })
    }
    
  onSubmit(): void {

    console.log(this.form.value);
    
    // if (this.form.valid) {
    //   this.publicacionSev.makePublication(this.form.value).subscribe({
    //     next: (data: any) => {
    //       console.log(data);
    //       console.log('se ha creado la pu');
    //     },
    //     error: (err:any) => {
    //       console.log(err);
    //     },
    //   });
    // } else {
    //   console.log('Formulario no vádido');
    // }
  }
}
