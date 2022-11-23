import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../modle/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  product:Product[]=[];
constructor(private productService : ProductService) {
}
ngOnInit() {
  this.getAll();
}
getAll(){
  this.product=this.productService.getAll();
}
}
