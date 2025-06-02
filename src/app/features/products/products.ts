import { Component } from '@angular/core';
import {electronicsProducts} from '../data/products';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    RouterLink
  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  protected readonly electronicsProducts = electronicsProducts;
}
