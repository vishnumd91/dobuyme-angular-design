import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/components/shared/services/product.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.sass']
})
export class PostViewComponent implements OnInit {
  postId:number;
  postDetails:any = [];
  postComments:any = []
  constructor(private route:ActivatedRoute, private productService: ProductService,) { 
    this.route.queryParamMap.pipe().subscribe(params =>{
      this.postId = params['params'].postId;
      // alert(JSON.stringify(params['params'].postId))
    })
  }

  ngOnInit(): void {
    this.productService.postDetails(this.postId).subscribe(postDetails => {
      console.log("haiii",postDetails)
      this.postDetails = postDetails;
    })

    this.productService.postComments(this.postId).subscribe(postComments => {
      console.log("haiii",postComments)
      this.postComments = postComments;
    })
    
    
  }

}
