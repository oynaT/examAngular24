import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/core/interfaces/Product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  subscribe$!: Subscription;
  errorMessage!: string;
  searchTerm!: string;
  //isLoading: boolean = false

  constructor(
    private productService: ProductService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Search');
  }

  onSearchHandler(formData: NgForm) {
    const { search } = formData.value;
    //this.isLoading = true;
    
    this.subscribe$ = this.productService.search(search).subscribe({
      next: (products) => {
        this.products = products;
        //this.isLoading = false;
      },
      error: (error) => (this.errorMessage = error.error.message),
    });
  }

  ngOnDestroy(): void {
    if (this.subscribe$ != undefined) {
      this.subscribe$.unsubscribe();
    }
  }
}