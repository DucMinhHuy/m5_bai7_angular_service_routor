import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
// khop voi bai7.4
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
// @ts-ignore
  productForm:FormGroup;
// @ts-ignore
  id:number;
constructor(private productServicr :ProductService,
            private activatedRouted : ActivatedRoute) {
  this.activatedRouted.paramMap.subscribe((paramMap : ParamMap)=>{
    // @ts-ignore
    this.id = +paramMap.get('id');
    const product =this.getProduct(this.id);
  });
}
getProduct(id:number){
  return this.productServicr.findById(id).subscribe(product=>{
    this.productForm=new FormGroup({
      id:new FormControl(product.id),
      name: new FormControl(product.name),
      price :new FormControl(product.price),
      description :new FormControl(product.description),
    });
  });
}
updateProduct(id:number){
  const product = this.productForm.value;
  this.productServicr.Update(id,product).subscribe(()=>{
    alert('thanh cong');
  },e=>{
    console.log(e);
  });
}
}
