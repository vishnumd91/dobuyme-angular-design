import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/modals/product.model';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';



// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("compareItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public currency : string = 'USD';
  public catalogMode : boolean = false;

  private _url: string = "assets/data/";
  public url = "assets/data/banners.json";

  public compareProducts : BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public observer   :  Subscriber<{}>;
  constructor(private httpClient: HttpClient, public snackBar: MatSnackBar) {
   this.compareProducts.subscribe(products => products = products)
  }

  private products(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://jsonplaceholder.typicode.com/posts');
  }

  posts(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    // return this.httpClient.get('assets/data/products2.json');
  }
  postDetails(postId){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  postComments(postId){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }
   // Get Products By category
   public getProductByCategory(category: string): Observable<Product[]> {
    return this.products().pipe(map(items =>
       items.filter((item: Product) => {
         if(category == 'all')
            return item
            else
            return item.category === category;

       })
     ));
  }

}
