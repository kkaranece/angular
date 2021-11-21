import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, Title } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpace } from "./shared/ConvertToSpace";

@NgModule({
  declarations : [AppComponent,
    ProductListComponent,
  ConvertToSpace],
  imports :[BrowserModule,FormsModule],
  providers:[Title],
  bootstrap :[AppComponent]
})
export  class AppModule{

}