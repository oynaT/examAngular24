import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { IProduct } from 'src/app/core/interfaces/Product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy{

  products!: IProduct[];
  subscribe$!: Subscription;
  errorMessage!: string;
 

constructor ( private productService: ProductService,  private titleService: Title) {}

ngOnInit(): void {
  this.titleService.setTitle('Products');

  this.subscribe$ = this.productService.getAllProducts().subscribe({
      next: (products) => {
      this.products = products;
        //this.isLoading = false;
    },
    error: (error) => this.errorMessage = error.error.message
  })
}
ngOnDestroy(): void {
  if (this.subscribe$ != undefined) {
    this.subscribe$.unsubscribe();
  }
}

}
