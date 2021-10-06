import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductLeftSidebarComponent } from './products/product-left-sidebar/product-left-sidebar.component';
import { PostViewComponent } from './products/post-view/post-view.component';

// Routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products/:category', component: ProductLeftSidebarComponent },
  { path: 'post-view', component: PostViewComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
