import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  visible = 'visibility: hidden;'
  alertanegativa  = 'visibility: hidden; position: absolute; '
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private router: Router,
    
  ) {}
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  ngOnInit(): void {}
  onSubmit(): void {
    if (this.form.valid) {
      this.visible = 'visibility: visible;'
      this.authService.login(this.form.value).subscribe({
        next: (data: any) => {
          this.tokenService.saveToken(data.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.alertanegativa = 'transition: 0.5s; visibility: visible; max-with: 200px;'
          this.visible = 'visibility: hidden;'
          console.log(err.status);
        },
      });
    } else {
      console.log('Formulario no vádido');
    }
  }
}


