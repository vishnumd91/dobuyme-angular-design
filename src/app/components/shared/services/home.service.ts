import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HomeApiService {

  private homeUrl = 'https://api.dobuyme.com/webapp/home/listing';
  constructor(private http:HttpClient) { }

  getHomeData() {
    return this.http.get(this.homeUrl);
  }
}
