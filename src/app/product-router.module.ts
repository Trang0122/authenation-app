import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const appRoutes : Routes = [
  {
    path : '',
    component : ProductComponent,
  },
  {
    path : ':id',
    component : ProductDetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports : [RouterModule]
})
export class ProductRouterModule { }
