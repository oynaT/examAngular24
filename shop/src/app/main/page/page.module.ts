import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageItemComponent } from './home-page-item/home-page-item.component';
import { HomePageListComponent } from './home-page-list/home-page-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CatalogRoutingModule } from '../catalog/catalog-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    HomePageItemComponent,
    HomePageListComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class PageModule { }
