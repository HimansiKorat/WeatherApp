import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full' 
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./componets/product-crud.component/product-crud.component').then( (m) => m.ProductCrudComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./componets/dashboard/dashboard').then( (m) => m.Dashboard)
  }
];
