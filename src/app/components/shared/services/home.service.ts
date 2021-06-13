import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeApiService {

  private baseUrl = 'https://api.dobuyme.com/webapp/home/listing';
  constructor(private http:HttpClient) { }

  getHomeData() {
    return this.http.get(this.baseUrl);
  }
}
