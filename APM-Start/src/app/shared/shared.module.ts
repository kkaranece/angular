import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConvertToSpace } from "./ConvertToSpace";

@NgModule({
    declarations:[
        ConvertToSpace
    ],
    exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    ConvertToSpace
    ]
})
export class SharedModule{

}