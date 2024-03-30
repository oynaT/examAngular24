import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule,
    
  ],
  exports: [
    CatalogComponent,
    CreateComponent,
  ]
})
export class ProductsModule { }
