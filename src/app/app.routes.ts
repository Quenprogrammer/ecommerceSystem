import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/homepage/homepage').then(c => c.Homepage)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'products', loadComponent: () => import('./features/products/products').then(c => c.Products)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'product/:name', loadComponent: () => import('./features/products/view-products/view-products').then(c => c.ViewProducts)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'shop', loadComponent: () => import('./features/shop/shop').then(c => c.Shop)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: '', loadComponent: () => import('./features/homepage/homepage').then(c => c.Homepage)/*, canActivate: [lockdownGuardGuard]*/ },


];
