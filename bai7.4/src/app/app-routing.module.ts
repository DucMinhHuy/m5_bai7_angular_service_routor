import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {CreatComponent} from "./product/creat/creat.component";

const routes: Routes = [{
  path : 'product/list',
  component:ProductListComponent
},
  {
    path:'product/creat',
    component:CreatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
