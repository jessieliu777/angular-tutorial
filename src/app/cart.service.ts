import { Injectable } from '@angular/core';

import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {}

  add(product: Product) {
    this.items.push(product);
  }

  get() {
    return this.items;
  }

  clear() {
    this.items = [];
    return this.items;
  }
}
