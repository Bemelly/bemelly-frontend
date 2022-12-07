import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}

  getUsers(): any {
    return this.http.get(`${environment.apiUrl}/api/users/getProfesionalUsers`);
  }
}
