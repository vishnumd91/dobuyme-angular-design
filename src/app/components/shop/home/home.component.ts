import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../shared/services/product.service";
import { Product } from "src/app/modals/product.model";
import { HomeApiService } from "../../shared/services/home.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isMobile: boolean;
  items: any;
  products: any;
  public banners = [];
  public slides = [
    {
      title: "Huge sale",
      subtitle: "Up to 70%",
      image: "assets/images/carousel/banner1.jpg",
    },
    {
      title: "Biggest discount",
      subtitle: "Check the promotion",
      image: "assets/images/carousel/banner2.jpg",
    },
    {
      title: "Biggest sale",
      subtitle: "Dont miss it",
      image: "assets/images/carousel/banner3.jpg",
    },
    {
      title: "Our best products",
      subtitle: "Special selection",
      image: "assets/images/carousel/banner4.jpg",
    },
    {
      title: "Massive sale",
      subtitle: "Only for today",
      image: "assets/images/carousel/banner5.jpg",
    },
  ];

  constructor(
    private productService: ProductService,
    private homeService: HomeApiService,
    private router:Router,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.productService.getBanners().subscribe((data) => (this.banners = data));

    this.homeService.getHomeData().subscribe((data) => {
      this.items = data["items"];
      this.spinner.hide()
    });
  }

  viewAllProduct(catId : number){
    this.router.navigate(['/home/products/car'], { queryParams: { categoryId: catId} });
  }

}
