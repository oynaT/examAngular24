import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/core/interfaces/Product';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  subscribe$!: Subscription;
  errorMessage!: string;
  
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserData()?._id as string;
    const userEmail = this.authService.getUserData()?.email as string;
    this.titleService.setTitle(userEmail);

      this.subscribe$ = this.productService.getMyProducts(userId).subscribe({
        next: (products) => (this.products = products),
        error: (error) => (this.errorMessage = error.error.message),
      });
  }

  ngOnDestroy(): void {
    if (this.subscribe$ != undefined) {
      this.subscribe$.unsubscribe();
    }
  }
}