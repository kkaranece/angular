import { NgModule } from "@angular/core";
import { BrowserModule, Title } from "@angular/platform-browser";
import {  RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailsComponent } from "./products/details/product.details.component";
import { ProductListComponent } from "./products/product-list.component";
import { ProdcutModule } from "./products/product.module";
import { PageNotFoundComponent } from './404/page-not-found.component';

const routes : Routes =[
  {path:'Home' , component: WelcomeComponent},
  {path:'Products', component: ProductListComponent},
  {path:'',component:WelcomeComponent},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations : [
    AppComponent,
    PageNotFoundComponent
  ],
  imports :[
    BrowserModule,
    RouterModule.forRoot(routes),
    ProdcutModule
  ],
  providers:[Title],
  bootstrap :[AppComponent]
})
export  class AppModule{

}