import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { switchMap, map } from 'rxjs/operators'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product : any;
  public idSelected : number;
  constructor(
    private route : ActivatedRoute, 
    private service : ProductService,
    private navigate : Router
    ) { }

  ngOnInit(): void {
    this.useParamMap();
    //trong trường hợp navigate giữa cùng 1 route snapshot không thể làm được vì nó không theo dõi sự thay đổi của route được.
  }

  useSnapShot(){
    
    this.idSelected = +this.route.snapshot.paramMap.get('id');
    console.log(this.idSelected);
    this.product = this.service.getDetail(this.idSelected);
  }

  useParamMap(){
    this.route.paramMap.subscribe(params => {
      this.idSelected = Number(params.get('id'));
      this.product = this.service.getDetail(this.idSelected);
    });
  }
  onClickBack(){
    this.navigate.navigate(['customvalidator/product']);
  }
}
