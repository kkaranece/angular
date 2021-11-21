import { Component, OnInit } from "@angular/core";
import { Iproduct } from "../Module/Iproducts";

@Component({
    selector :'pm-products',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit{
    productListTitle : string ='Products list';
    showImage : boolean = false;    
    _listFilter : string ='';
    private products : Iproduct[] =[];

    productsCopy : Iproduct[]=[];

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
      this.products = [
          {
              "productId": 1,
              "productName": "Leaf Rake",
              "productCode": "GDN-0011",
              "releaseDate": "March 19, 2021",
              "description": "Leaf rake with 48-inch wooden handle.",
              "price": 19.95,
              "starRating": 3.2,
              "imageUrl": "assets/images/leaf_rake.png"
            },
            {
              "productId": 2,
              "productName": "Garden Cart",
              "productCode": "GDN-0023",
              "releaseDate": "March 18, 2021",
              "description": "15 gallon capacity rolling garden cart",
              "price": 32.99,
              "starRating": 4.2,
              "imageUrl": "assets/images/garden_cart.png"
            },
            {
              "productId": 5,
              "productName": "Hammer",
              "productCode": "TBX-0048",
              "releaseDate": "May 21, 2021",
              "description": "Curved claw steel hammer",
              "price": 8.9,
              "starRating": 4.8,
              "imageUrl": "assets/images/hammer.png"
            },
            {
              "productId": 8,
              "productName": "Saw",
              "productCode": "TBX-0022",
              "releaseDate": "May 15, 2021",
              "description": "15-inch steel blade hand saw",
              "price": 11.55,
              "starRating": 3.7,
              "imageUrl": "assets/images/saw.png"
            },
            {
              "productId": 10,
              "productName": "Video Game Controller",
              "productCode": "GMG-0042",
              "releaseDate": "October 15, 2020",
              "description": "Standard two-button video game controller",
              "price": 35.95,
              "starRating": 4.6,
              "imageUrl": "assets/images/xbox-controller.png"
            }
      ];
      this.productsCopy=this.products;
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