import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, Title } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { StarRating } from "./rating/star.rating.component";
import { ConvertToSpace } from "./shared/ConvertToSpace";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations : [AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarRating],
  imports :[BrowserModule,FormsModule,HttpClientModule],
  providers:[Title],
  bootstrap :[AppComponent]
})
export  class AppModule{

}