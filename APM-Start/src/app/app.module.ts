import { NgModule } from "@angular/core";
import { BrowserModule, Title } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProdcutModule } from "./products/product.module";

@NgModule({
  declarations : [
    AppComponent
  ],
  imports :[
    BrowserModule,
    ProdcutModule
  ],
  providers:[Title],
  bootstrap :[AppComponent]
})
export  class AppModule{

}