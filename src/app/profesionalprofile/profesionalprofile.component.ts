import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../_services/profile.service';

import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profesionalprofile',
  templateUrl: './profesionalprofile.component.html',
  styleUrls: ['./profesionalprofile.component.scss'],
})
export class ProfesionalprofileComponent implements OnInit {
  showModal: boolean = false;
  modification: any = {
    name: '',
    email: '',
  };
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
        this.modification.name = data.name;
        this.modification.email = data.email;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  modifyUser() {
    this.profileService
      .modify({
        CC: this.user.CC,
        name: this.modification.name,
        email: this.modification.email,
      })
      .subscribe((data) => {
        console.log(data);
        this.ngOnInit();
        this.toggleModal();
      });
    this.toggleModal();
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
