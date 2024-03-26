import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDetailPagaComponent } from './catalog-detail-paga/catalog-detail-paga.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogListItemComponent } from './catalog-list-item/catalog-list-item.component';
import { CatalogNewPageComponent } from './catalog-new-page/catalog-new-page.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatalogDetailPagaComponent,
    CatalogListComponent,
    CatalogListItemComponent,
    CatalogNewPageComponent,
    CatalogPageComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
  ]
})
export class CatalogModule { }
