import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList;
  priceList;
  constructor(){
    this.productList = ['Shoe', 'Shirt', 'Phone'];
    this.priceList = ['9000', '1300', '70000'];
  }

  addToCart(input){
    console.log(input);
  }
}
