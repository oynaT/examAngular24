import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from 'src/app/core/interfaces/Product';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  product!: IProduct;
  subscribe$!: Subscription;
  errorMessage!: string;
  isOwner!: boolean;
  isLogged!: boolean;
  userId!: string;
  canOrder$!: Observable<number>;
  orders$!: Observable<number>;
  showModal: boolean = false;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Details');
    this.isLogged = this.authService.isLogged;
    const productId: string = this.route.snapshot.params['productId'];
    this.userId = this.authService.getUserData()?._id as string;
    this.orders$ = this.productService.ordersForProduct(productId);
    this.canOrder$ = this.productService.canOrder(productId, this.userId);
    
    this.subscribe$ = this.productService.getProductById(productId).subscribe({
      next: (productData) => {
        this.product = productData;
        this.titleService.setTitle(this.product.name);
        this.isOwner = productData._ownerId == this.userId;
      },
      error: (error) => this.errorMessage = error.error.message
    });
  }

  deleteProduct(productId: string) {
      this.subscribe$ = this.productService.deleteProductById(productId).subscribe({
        error: (error) => this.errorMessage = error.error.message,
        complete: () => this.router.navigate(['products'])
      });
  }
  
  orderProduct(productId: string) {
    this.subscribe$ = this.productService.orderProductById(productId).subscribe({
      error: (error) => this.errorMessage = error.error.message,
      complete: () => {
        this.canOrder$ = this.productService.canOrder(productId, this.userId);
        this.orders$ = this.productService.ordersForProduct(productId);
        this.router.navigate(['/products', 'details', productId])
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscribe$ != undefined) {
      this.subscribe$.unsubscribe();
    }
  }
}
