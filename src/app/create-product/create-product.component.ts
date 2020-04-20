import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProductService } from "../product.service";
import { Product } from "../product";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    this.productService.newProduct(this.product).subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
//Used to navigate from one component to another

  gotoList() {
    this.router.navigate(['/products']);
  }

}
