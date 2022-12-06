import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }


  makePublication(body:any): any {
    return this.http.post(`${environment.apiUrl}/api/publication/newPublication`, body)
  }
  getPublication(owner:any): any {
    return this.http.get(`${environment.apiUrl}/api/publication/getUserPublications/${owner}`)
  }
}
