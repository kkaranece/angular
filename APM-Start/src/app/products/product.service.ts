import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Iproduct } from "../Module/Iproduct";
import {tap,catchError, filter, map} from "rxjs/operators"
import { Observable, throwError } from "rxjs";

@Injectable()
export class ProductService{

    private _httpUrl="api/products/products.json";
    constructor(private http : HttpClient){}

    getProducts() : Observable<Iproduct[]>{
       return this.http.get<Iproduct[]>(this._httpUrl).pipe(
           tap(products => console.log('All : ',JSON.stringify(products))),
           map(products => products.filter(product => product.productId ===1)),
           catchError(this.handleError)
       );
    }

    private handleError(err : HttpErrorResponse){
        let errorMessage='';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred :${err.message}`;
        }
        else{
            errorMessage = `An error occurred with status ${err.status} and message ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}