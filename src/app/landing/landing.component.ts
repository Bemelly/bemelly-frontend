import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  hola = '<h1>Hola<h1>'
  constructor(private router: Router) {}
  ngOnInit(): void {
    if(sessionStorage.getItem('auth-token')){
      this.router.navigate(['/home'])
    }
  }
}
