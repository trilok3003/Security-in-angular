import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CategoryListComponent } from '../category-list/category-list.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: { claimName: 'canAccessProducts' }
  },
  {
    path: 'categories',
    component: CategoryListComponent,
    canActivate: [AuthGuard],
    data: { claimName: 'canAccessCategories' }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule {}
