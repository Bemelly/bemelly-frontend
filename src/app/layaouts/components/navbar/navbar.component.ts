import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  user: any
  visible = 'visibility: hidden;'
  constructor(private tokenService: TokenStorageService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser()
  }

  logout(): void {
    this.tokenService.logout()
    this.visible = 'visibility: visible;'
    setTimeout(() => {
     this.router.navigate(['/']) 
    }, 4000);
    


  }

}
