import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Iproduct } from "./model/Iproduct";
import { ProductService } from "./service/product.service";

@Component({
    selector :'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers : [ProductService]
})

export class ProductListComponent implements OnInit, OnDestroy{
    productListTitle : string ='Products list';
    showImage : boolean = false;    
    _listFilter : string ='';
    private products : Iproduct[] =[];

    errorMessage : string | null =null;

    productsCopy : Iproduct[]=[];

    sub! : Subscription;

    constructor(private productService :ProductService){}

    get listFilter():string{
      return this._listFilter;
    }

    set listFilter(filterKey : string){
      this._listFilter=filterKey;
      this.productsCopy =this.filterProduct(filterKey);
    }

    filterProduct(filterKey : string) : Iproduct[]
    {
        this.productsCopy = this.products;
        return this.productsCopy.filter((product : Iproduct) => product.productName.toLowerCase().includes(filterKey.toLowerCase()));
    }
    

    toggleImage() : void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
      this.sub = this.productService.getProducts().subscribe({
        next : products =>{
            this.products = products;
            this.productsCopy = this.products;
        },
        error : error => this.errorMessage =error

      });
      this.productsCopy=this.products;
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }

    onRatingClicked(productId : number) : void{
      this.productsCopy.forEach((product : Iproduct) => {
        if(product.productId === productId)
        {
          product.starRating = (product.starRating+1) < 5 ? product.starRating+1 : 5;
        }
      })
    }
}