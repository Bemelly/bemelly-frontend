import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../_services/profile.service';

import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor(
    private profileService: ProfileService,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.userData();
  }

  userData() {
    const tokenInfo: any = this.tokenService.getUser();

    this.profileService.getUser(tokenInfo.CC).subscribe({
      next: (data: any) => {
        console.log(data);

        this.user = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
