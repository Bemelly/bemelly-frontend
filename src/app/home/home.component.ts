import { Component, OnInit } from '@angular/core';
import { BookingService } from '../_services/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 usuarios:any;
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
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

}
