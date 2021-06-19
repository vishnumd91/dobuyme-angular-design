import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/components/shared/services/product.service";
import { ActivatedRoute, Params } from "@angular/router";
import { ColorFilter, Product } from "src/app/modals/product.model";
import { Unsubscribe } from "src/app/modals/Unsubscribe";
import { takeUntil } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-product-left-sidebar",
  templateUrl: "./product-left-sidebar.component.html",
  styleUrls: ["./product-left-sidebar.component.sass"],
})
export class ProductLeftSidebarComponent extends Unsubscribe implements OnInit {
  public sidenavOpen: boolean = true;
  public animation: any; // Animation
  public sortByOrder: string = ""; // sorting
  public page: any;
  public tagsFilters: any[] = [];
  public viewType: string = "grid";
  public viewCol: number = 25;
  public colorFilters: ColorFilter[] = [];

  public items: Product[] = [];
  public allItems: Product[] = [];
  public products: Product[] = [];
  public tags: any[] = [];
  public colors: any[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
  ) {
    super();
    this.spinner.show();
    this.route.params.subscribe((params: Params) => {
      const category = params["category"];
      this.productService
        .getProductByCategory(category)
        .pipe(takeUntil(this._destroyed$))
        .subscribe((products) => {
          this.allItems = products;
          this.products = products;
          this.spinner.hide();
        });
    });
  }

  // Get current product tags
  public getTags(products) {
    var uniqueBrands = [];
    var itemBrand = Array();
    products.map((product, index) => {
      if (product.tags) {
        product.tags.map((tag) => {
          const index = uniqueBrands.indexOf(tag);
          if (index === -1) uniqueBrands.push(tag);
        });
      }
    });
    for (var i = 0; i < uniqueBrands.length; i++) {
      itemBrand.push({ brand: uniqueBrands[i] });
    }
    this.tags = itemBrand;
  }

  // Get current product colors
  public getColors(products) {
    var uniqueColors = [];
    var itemColor = Array();
    products.map((product, index) => {
      if (product.colors) {
        product.colors.map((color) => {
          const index = uniqueColors.indexOf(color);
          if (index === -1) uniqueColors.push(color);
        });
      }
    });
    for (var i = 0; i < uniqueColors.length; i++) {
      itemColor.push({ color: uniqueColors[i] });
    }
    this.colors = itemColor;
  }

  ngOnInit() {}

  public changeViewType(viewType, viewCol) {
    this.viewType = viewType;
    this.viewCol = viewCol;
  }
  // Animation Effect fadeIn
  public fadeIn() {
    this.animation = "fadeIn";
  }

  // Animation Effect fadeOut
  public fadeOut() {
    this.animation = "fadeOut";
  }

  // Update tags filter
  public updateTagFilters(tags: any[]) {
    this.tagsFilters = tags;
    this.animation == "fadeOut" ? this.fadeIn() : this.fadeOut(); // animation
  }

  // sorting type ASC / DESC / A-Z / Z-A etc.
  public onChangeSorting(val) {
    this.sortByOrder = val;
    this.animation == "fadeOut" ? this.fadeIn() : this.fadeOut(); // animation
  }

  // Initialize filetr Items
  public filterItems(): Product[] {

    return this.items;
  }

  public onPageChanged(event) {
    this.page = event;
    this.allItems;
    window.scrollTo(0, 0);
  }

  // Update price filter
  public updatePriceFilters(price: any) {
    console.log(price);
    console.log(this.products);

    this.allItems = this.products.filter((item: Product) => {
      return item.price >= price.priceFrom && item.price <= price.priceTo;
    });
    console.log(this.products);
  }

  onBrendsChanged(newBrend) {
    console.log(newBrend);
    this.allItems =
      newBrend === "all"
        ? this.products
        : this.products.filter(
            (item) => item.model === newBrend
          );
    console.log(this.allItems);
  }
}
