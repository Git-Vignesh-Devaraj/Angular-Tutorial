import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { TestGuardService } from './test-guard.service';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [TestGuardService],
    canActivateChild: [TestGuardService],
    canDeactivate: [TestGuardService],
    resolve: { products: TestGuardService },
    children: [
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'active',
        component: ActiveComponent,
      },
    ],
  },
  {
    path: 'test',
    component: TestComponent,
    data: { id: '1', data: 'testing' },
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
