import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  /*id:number;
  name:string;
  price:number;*/

  products:Object[];
  hide:boolean;
  
  constructor() {
    /*this.id=1;
    this.name="Mac Book Pro";
    this.price=1300;*/
    this.products = [
      {
        id:"1",
        name:"Mac Book"
      },
      {
        id:"2",
        name:"Iphone"
      }
    ];
        
   }

   public getProducts(){
     return this.products;
   }
   /*public getId():number{
     return this.id;
   }
   public getName():string{
     return this.name;
   }
   public getPrice():number{
     return this.price;
   }*/
   toggle(){
    this.hide=!this.hide;}
  ngOnInit(): void {
  }

}
