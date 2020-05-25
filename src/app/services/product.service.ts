import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products : any[] =[
    {
      id : 1,
      name : "Iphone X",
      price : 200000000,
      color : "gold rose"
    },
    {
      id : 2,
      name : "Iphone 8+",
      price : 110000000,
      color : "gold rose"
    },
    {
      id : 3,
      name : "Samsung Note 20 Ultra",
      price : 250000000,
      color : "white"
    }
  ]

  constructor() { }

  getListProduct(){
    return this.Products;
  }
  getDetail(id : number){
    return  this.Products.find( x => x.id == id) ;
  
  }
}
