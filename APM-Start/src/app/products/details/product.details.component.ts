import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../model/Iproduct';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../service/product.service';

@Component({
  selector: 'pm-product.details',
  templateUrl: './product.details.component.html',
  styleUrls: ['./product.details.component.css'],
  providers:[ProductService]
})
export class ProductDetailsComponent implements OnInit {
  public pageTitle ="Product Details :";
  public product! : Iproduct;
  public cProductId! : number;
  constructor(private aRoute : ActivatedRoute, 
              private pService: ProductService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.aRoute.paramMap.subscribe({
       next : params => {
        this.getProduct(Number(params.get("id")));
       }
    });
  }

  private getProduct(id: number): void{
    this.pService.getProducts().subscribe({
          next : products =>{
            for(let product of products){
              if(product.productId == id){
                this.cProductId=id;
                this.product = product;
              }
            }
          }   
    })
  }

  public onBack() : void{
    this.router.navigate(["/Products"]);
  }

  public next() : void{
    this.router.navigate(["/Products",this.cProductId+1]);
  }

  public previous(): void{
    this.router.navigate(["/Products",this.cProductId-1]);

  }

}
