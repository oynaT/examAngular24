import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { CatalogModule } from './main/catalog/catalog.module';
import { PageModule } from './main/page/page.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClientModule,
    //BrowserAnimationsModule,
    RouterModule,
    CoreModule.forRoot(),
    CatalogModule,
    PageModule,
    //NgbModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
