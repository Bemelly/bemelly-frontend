import { Component } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { ProfileService } from '../_services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private profileService: ProfileService, private bookingService: BookingService){}

  
  
}

