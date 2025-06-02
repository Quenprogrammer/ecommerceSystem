import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {electronicsProducts} from '../../data/products';

@Component({
  selector: 'app-products-home',
  imports: [
    RouterLink
  ],
  templateUrl: './products-home.html',
  styleUrl: './products-home.css'
})
export class ProductsHome {

  protected readonly electronicsProducts = electronicsProducts;
}
