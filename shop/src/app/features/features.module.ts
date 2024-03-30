import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,    
    //AuthComponent,
    //ProductsModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class FeaturesModule { }
