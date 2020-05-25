import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ErrorComponent } from './components/error/error.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { ConfigComponent } from './config/config/config.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path:"",
    redirectTo : 'home',
    pathMatch : 'full',
  },
  {
    path: "product",
    loadChildren : () => import('./components/product/product.module').then(m => m.ProductModule),
  },
  {
    path: "home",
    component : HomeComponent
  },
  {
    path: "login",
    component : LoginComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
    
  
  // {
  //   path: "templatedriven",
  //   component : TemplateDrivenFormComponent
  // },
  // {
  //   path: "reactiveform",
  //   component: ReactiveFormComponent
  // },
  // {
  //   path: "httpclient",
  //   component: ConfigComponent
  // },
  {
    path : "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
