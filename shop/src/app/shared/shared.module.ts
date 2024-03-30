import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    ProductComponent,
  ]
})
export class SharedModule { }
