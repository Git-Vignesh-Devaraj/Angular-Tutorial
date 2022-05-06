import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor() {}

  getProducts() {
    return of([1, 2, 3, 4]).pipe(delay(0));
  }
}
