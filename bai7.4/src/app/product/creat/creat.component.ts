import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent {
  productForm : FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    price:new FormControl(),
    description:new FormControl()
  });
  constructor(private productServicr:ProductService) {
  }
  submit(){
    const product=this.productForm.value;
    this.productServicr.saveProduct(product).subscribe(()=>{
      this.productForm.reset();
      alert('tao thanh cong');
    },e=>{
      console.log(e);
      });
  }
}
