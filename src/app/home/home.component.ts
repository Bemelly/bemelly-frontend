import { Component, OnInit } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
user: any
 usuarios:any;
 profile: any
 defaultAvatar: string = 'https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'
  constructor(private bookingService: BookingService, private profileService: ProfileService, private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getUser()
    this.getProfile()
    this.bookingService.getUsers().subscribe({
      next: (data:any)=>{
        console.log(data);
        this.usuarios = data
      },
      error: (err:any)=>{
        console.log(err);
        
      }
    })
  }
  getProfile(){
    this.profileService.getProfile().subscribe({
      next:(response: any)=>{
        this.profile = response.data
        
      },
      error:(error)=>{
        console.log(error)
        
      }
    })
   }
}
