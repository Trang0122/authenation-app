import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public listProduct : any[];

  constructor(private service : ProductService) { }


  ngOnInit(): void {
    this.listProduct = this.service.getListProduct();
  }

}
