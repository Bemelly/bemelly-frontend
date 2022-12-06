import { Component, OnInit } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
import { PublicationService } from '../_services/publication.service';


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
  constructor(private bookingService: BookingService, private profileService: ProfileService, private tokenService: TokenStorageService, private router: Router, private publicationSev: PublicationService) { }

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
  showPublication(data:any){
    this.publicationSev.getPublication(data).subscribe({
      next:(response: any)=>{
        console.log(response);
        
        this.router.navigate([`/users/showpulication/${data}`])
        console.log(data);
        
      },
      error:(error:any)=>{
        console.log(error)
        
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
