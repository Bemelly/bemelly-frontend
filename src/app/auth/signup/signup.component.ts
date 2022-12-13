import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  visible = 'visibility: hidden;'
  alertanegativa  = 'visibility: hidden; position: absolute; '
  alertapositiva = 'visibility: hidden; position: absolute; '
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  form = this.fb.group({
    
    name: ['', Validators.required],
    CC: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    role: ['', Validators.required]
  });

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      this.visible = 'visibility: visible;'
      this.authService.signup(this.form.value).subscribe({
        next: (data) => {
          this.alertapositiva = 'transition: 0.5s; visibility: visible; max-with: 200px;'
          setTimeout(() => {
            this.router.navigate(['users/login']) 
           }, 2000);
        },
        error: (err) => {
          console.log(err);
          this.alertanegativa = 'transition: 0.5s; visibility: visible; max-with: 200px;'
          this.visible = 'visibility: hidden;'
        },
      });
    } else {
      console.log('Formulario Inválido');
    }
  }
}
