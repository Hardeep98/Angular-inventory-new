import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { ProductService } from "../product.service";
import { Product } from "../product";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  product: Product;
  submitted = false;
  products: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }
  ngOnInit(): void {
    this.product = new Product(); 
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data => { console.log(data), this.product = data; }, error => console.log(error));
  }

  onSubmit(){
    this.updateProduct();
  }
  reloadDate(){
    this.products =this.productService.getProductsList();
  }
  gotoList(){
    this.router.navigate(['/products']);
  }
  updateProduct(){
    this.productService.updateProduct(this.id,this.product).subscribe(data=>console.log(data),error=>console.log(error));
    this.product=new Product();
    this.reloadDate();
    this.gotoList();
  }

}
