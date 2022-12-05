import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PublicationService } from 'src/app/_services/publication.service';

@Component({
  selector: 'app-makepublication',
  templateUrl: './makepublication.component.html',
  styleUrls: ['./makepublication.component.scss']
})
export class MakepublicationComponent {
  
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

    });
    
    ngOnInit(): void {
      this.user = this.tokenService.getUser()
      console.log(this.user.CC);
      this.form.patchValue({
        ownerCC: this.user.CC
      })
    }

    

    
  onSubmit(): void {
    if (this.form.valid) {
      this.publicacionSev.makePublication(this.form.value).subscribe({
        next: (data: any) => {
          console.log(data);
          console.log('se ha creado la pu');
          
          
        },
        error: (err:any) => {
          console.log(err);
        },
      });
    } else {
      console.log('Formulario no vádido');
    }
  }
}
