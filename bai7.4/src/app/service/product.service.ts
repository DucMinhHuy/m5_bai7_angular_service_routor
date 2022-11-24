import { Injectable } from '@angular/core';
import {Product} from "../modle/product";
import {enviroments} from "../enviroment/enviroments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL=`${enviroments.apiUrl}`;
@Injectable({
  providedIn:'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(API_URL+'/product');
  }
  saveProduct(product:any):Observable<Product>{
    return this.http.post<Product>(API_URL +'/product',product);
  }
  findById(id:number):Observable<Product>{
    return this.http.get<Product>(`${API_URL}/product/${id}`);
  }
  Update(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(`${API_URL}/product/edit/${id}`,product);
  }
  delete(id:number):Observable<Product>{
    return this.http.delete<Product>(`${API_URL}/product/${id}`);
  }
}
