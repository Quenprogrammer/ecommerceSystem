import {Component, OnInit} from '@angular/core';
import {ElectronicsProduct, electronicsProducts} from '../../data/products';
import {ActivatedRoute} from '@angular/router';
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-view-products',
  imports: [
    NgForOf,
    KeyValuePipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './view-products.html',
  styleUrl: './view-products.css'
})
export class ViewProducts implements OnInit{
  product: ElectronicsProduct | undefined;
  quantity: number = 1;

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const nameParam = this.route.snapshot.paramMap.get('name');
    this.product = electronicsProducts.find(p => p.name === nameParam);
  }
}
