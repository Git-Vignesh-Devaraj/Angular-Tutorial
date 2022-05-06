import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
const routes: Routes = [
  {
    path: 'second',
    // component: SecondComponent,
    loadChildren: () => import('./second.module').then((s) => s.SecondModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [SecondComponent],
  exports: [RouterModule],
})
export class SecondModule {}
