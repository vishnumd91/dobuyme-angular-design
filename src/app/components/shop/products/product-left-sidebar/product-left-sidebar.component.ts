import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ColorFilter } from 'src/app/modals/product.model';

@Component({
  selector: 'app-product-left-sidebar',
  templateUrl: './product-left-sidebar.component.html',
  styleUrls: ['./product-left-sidebar.component.sass']
})
export class ProductLeftSidebarComponent implements OnInit {
  public sidenavOpen:boolean = true;
  public animation    :   any;   // Animation
  public sortByOrder  :   string = '';   // sorting
  public page:any;
  public tagsFilters  :   any[] = [];
  public viewType: string = 'list';
  public viewCol: number = 100;
  public colorFilters :   ColorFilter[] = [];

  public items        :   Product[] = [];
  public allItems:any = [];
  public products: Product[] = [];
  public tags         :   any[] = [];
  public colors       :   any[] = [];

  public posts:any=[]

  constructor(private productService: ProductService, private route: ActivatedRoute) {

    this.productService.posts().subscribe(posts => {
      this.posts = posts;
      // console.log("haiii",posts)
      this.allItems = posts;
    })
    
  }


  ngOnInit() {
  }
    // Animation Effect fadeIn
    public fadeIn() {
      this.animation = 'fadeIn';
  }

  // Animation Effect fadeOut
  public fadeOut() {
      this.animation = 'fadeOut';
  }

public onPageChanged(event){
  this.page = event;
  this.allItems;
  window.scrollTo(0,0);
}

}
