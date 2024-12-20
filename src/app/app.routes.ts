import { Router, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' }, // Rotta principale
  { path: 'products', component: ProductListComponent },   // Lista prodotti
  { path: 'add-product', component: AddProductComponent }, // Aggiungi prodotto
  { path: '**', redirectTo: 'products' }                  // Fallback route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule { }
