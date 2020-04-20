import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Router,ActivatedRoute } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

/**
 * Angular offers ActivatedRoute interface class, it carries the information about a route 
 * linked to a component loaded into the Angular app template
 * . An ActivatedRoute contains the router state tree within the angular app’s memory.*/

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:number;
  product:Product;
  constructor(private route:ActivatedRoute,private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.product = new Product();
    
    this.id = this.route.snapshot.params['id'];/* Snapshot is used to get the Route Parameters */
    
    this.productService.getProduct(this.id)
    .subscribe(data => {
    console.log(data)
    this.product = data;
    }, error => console.log(error));
    }
    list(){
    this.router.navigate(['products']);
    }


}
