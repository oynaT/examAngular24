import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)},
  { path: 'products', loadChildren: () => import('./features/products/products.module').then((m) => m.ProductsModule)},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
