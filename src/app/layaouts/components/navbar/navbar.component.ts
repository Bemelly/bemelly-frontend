import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  user: any
  profile: any
  visible = 'visibility: hidden;'
  constructor(private tokenService: TokenStorageService, private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser()
  }

  logout(): void {
    this.tokenService.logout()
    this.visible = 'visibility: visible;'
    setTimeout(() => {
     this.router.navigate(['/']) 
    }, 2000);
  }

  changephoto(e: any){
    const file = e.target.files[0]
    if (!file){
      return
    }
    console.log(file);
    const formData = new FormData()
    const photoProfile = formData.append('photo', file)
    this.profileService.uploadPhotoProfile(photoProfile).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }
 getProfile(){
  this.profileService.getProfile().subscribe({
    next:(data)=>{
      console.log(data);
      
    },
    error:(error)=>{
      console.log(error);
      
    }
  })
 }
}
