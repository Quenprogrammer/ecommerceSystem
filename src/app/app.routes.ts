import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/homepage/homepage').then(c => c.Homepage)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'faq', loadComponent: () => import('./features/faq/faq').then(c => c.FAQ)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'terms', loadComponent: () => import('./features/terms/terms').then(c => c.Terms)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'policy', loadComponent: () => import('./features/privacy/privacy').then(c => c.Privacy)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'productsView', loadComponent: () => import('./features/products/products-home/products-home').then(c => c.ProductsHome)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'products', loadComponent: () => import('./features/products/products').then(c => c.Products)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'product/:name', loadComponent: () => import('./features/products/view-products/view-products').then(c => c.ViewProducts)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: 'shop', loadComponent: () => import('./features/shop/shop').then(c => c.Shop)/*, canActivate: [lockdownGuardGuard]*/ },
  { path: '', loadComponent: () => import('./features/homepage/homepage').then(c => c.Homepage)/*, canActivate: [lockdownGuardGuard]*/ },


];
