import { NgModule } from "@angular/core";
import { starModule } from "../rating/start.module";
import { SharedModule } from "../shared/shared.module";
import { ProductListComponent } from "./product-list.component";



@NgModule({
    declarations:[
        ProductListComponent
    ],
    imports:[
        SharedModule,
        starModule
    ],
    exports:[
        ProductListComponent
    ]
})
export  class ProdcutModule{

}