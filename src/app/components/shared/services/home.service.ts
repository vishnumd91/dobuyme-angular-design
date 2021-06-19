import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HomeApiService {

  private homeUrl = 'https://api.dobuyme.com/webapp/home/listing';
  private productUrl = "https://api.dobuyme.com/webapp/view/details?id=4842"
  constructor(private http:HttpClient) { }

  getHomeData() {
    return this.http.get(this.homeUrl);
  }
}
