import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
} from '@angular/router';
import { ProductService } from './product.service';

@Injectable({ providedIn: 'root' })
export class TestGuardService
  implements CanActivate, CanActivateChild, CanDeactivate<any>, Resolve<any>
{
  canActivate(): boolean {
    return true;
  }

  canActivateChild() {
    return true;
  }

  canDeactivate() {
    return true;
  }

  resolve() {
    return this.productService.getProducts();
  }
  constructor(private productService: ProductService) {}
}
