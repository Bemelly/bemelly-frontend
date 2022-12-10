import { Component, OnInit } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { ProfileService } from 'src/app/_services/profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
import { PublicationService } from '../_services/publication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: any;
  estrellas: any = ['⭐', '⭐', '⭐', '⭐', '⭐'];
  usuarios: any;
  profile: any;
  star = this.randomStar();
  defaultAvatar: string =
    'https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg';
  constructor(
    private bookingService: BookingService,
    private profileService: ProfileService,
    private tokenService: TokenStorageService,
    private router: Router,
    private publicationSev: PublicationService
  ) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    this.getProfile();
    this.bookingService.getUsers().subscribe({
      next: (data: any) => {
        console.log(data);
        this.usuarios = data;
        // this.estrellas = this.randomStar(this.usuarios.length);
        // console.log(this.estrellas);
        // this.items = { usuarios: this.usuarios, estrellas: this.estrellas };
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  showPublication(data: any) {
    this.publicationSev.getPublication(data).subscribe({
      next: (response: any) => {
        console.log(response);

        this.router.navigate([`users/showpublication/${data}`]);
        console.log(data);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  getProfile() {
    this.profileService.getProfile().subscribe({
      next: (response: any) => {
        this.profile = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  randomStar() {
    let final = '';
    const estrella = '⭐';
    const aleatorio = Math.floor(Math.random() * (6 - 3) + 3);
    for (let i = 0; i < aleatorio; i++) {
      final += estrella;
    }
    return final;
  }
  randomService() {
    return Math.floor(Math.random() * (100000 - 5000) + 5000);
  }
}
