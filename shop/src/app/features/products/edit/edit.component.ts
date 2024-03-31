import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/core/interfaces/Product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  product!: IProduct;
  subscribe$!: Subscription;
  errorMessage!: string;

  constructor(
    private productService: ProductService,
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Edit');
    const productId = this.route.snapshot.params['productId'];
    this.subscribe$ = this.productService.getProductById(productId).subscribe({
      next: (productData) => this.product = productData,
      error: (error) => this.errorMessage = error.error.message
    });
  }

  onEditHandler(formData: NgForm) {
    const productId = this.route.snapshot.params['productId'];
    
    this.subscribe$ = this.productService.editProduct(productId, formData.value).subscribe({
      error: (err) => this.errorMessage = err.error.message,
      complete: () => this.router.navigate([ '/products', 'details', `${productId}`])
    });
  }

  ngOnDestroy(): void {
    if (this.subscribe$ != undefined) {
      this.subscribe$.unsubscribe();
    }
  }
}
