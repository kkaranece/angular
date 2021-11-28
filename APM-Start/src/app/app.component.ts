import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ProductService } from "./products/service/product.service";

@Component({
  selector : 'pm-root',
  templateUrl : './app.component.html'
})
export class AppComponent{
  pageTitle : String ='kirubakaran muthiah';
  public constructor(titleService : Title){
    titleService.setTitle("Products");
  }

}