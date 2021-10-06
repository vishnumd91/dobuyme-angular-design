import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductLeftSidebarComponent } from './products/product-left-sidebar/product-left-sidebar.component';


// Routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:category', component: ProductLeftSidebarComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
