import { RouterModule, Routes } from "@angular/router";
//import { AuthActivate } from "src/app/core/user/auth.guard";
import { CatalogDetailPagaComponent } from "./catalog-detail-paga/catalog-detail-paga.component";
import { CatalogNewPageComponent } from "./catalog-new-page/catalog-new-page.component";
import { CatalogPageComponent } from "./catalog-page/catalog-page.component";


const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogPageComponent,
  }, {
    path: 'catalog/create',
    component: CatalogDetailPagaComponent,
    //canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    },
  },
  {
    path: 'catalog/:itemId',
    component: CatalogDetailPagaComponent,
  }
]

export const CatalogRoutingModule = RouterModule.forChild(routes);
