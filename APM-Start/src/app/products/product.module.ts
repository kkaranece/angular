import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { starModule } from "../rating/start.module";
import { SharedModule } from "../shared/shared.module";
import { ProductDetailGuard } from "./details/product-detail.guard";
import { ProductDetailsComponent } from "./details/product.details.component";
import { ProductListComponent } from "./product-list.component";


const routes : Routes = [
    {
        path:'Products/:id',
        component:ProductDetailsComponent,
        canActivate : [ProductDetailGuard]
    }
]

@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetailsComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(routes),
        starModule
    ],
    exports:[
        ProductListComponent
    ]
})
export  class ProdcutModule{

}