import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IProduct } from '../interfaces/Product';
import { CONSTANTS } from '../environments/constants';
import { ENDPOINTS } from '../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    const url = CONSTANTS.host + ENDPOINTS.catalog;
    return this.http.get<IProduct[]>(url);
  }

  createProduct(productData: IProduct): Observable<IProduct> {
    const url = CONSTANTS.host + ENDPOINTS.createProduct;
    return this.http.post<IProduct>(url, productData);
  }

  getProductById(productId: string): Observable<IProduct> {
    const url = CONSTANTS.host + ENDPOINTS.details(productId);
    return this.http.get<IProduct>(url);
  }

  deleteProductById(productId: string): Observable<unknown> {
    const url = CONSTANTS.host + ENDPOINTS.delete(productId);
    return this.http.delete<unknown>(url);
  }

  orderProductById(productId: string): Observable<unknown> {
    const url = CONSTANTS.host + ENDPOINTS.orderProduct;
    return this.http.post<unknown>(url, {productId});
  }

  canOrder(productId: string, userId: string): Observable<number> {
    const url = CONSTANTS.host + ENDPOINTS.canOrder(productId, userId);
    return this.http.get<number>(url);
  }

  ordersForProduct(productId: string): Observable<number> {
    const url = CONSTANTS.host + ENDPOINTS.ordersForProduct(productId);
    return this.http.get<number>(url);
  }

  editProduct(productId: string, productData: IProduct): Observable<IProduct> {
    const url = CONSTANTS.host + ENDPOINTS.edit(productId);
    return this.http.put<IProduct>(url, productData);
  }

  getMyProducts(userId: string): Observable<IProduct[]> {
    const url = CONSTANTS.host + ENDPOINTS.getMyProducts(userId);
    return this.http.get<IProduct[]>(url);
  }

  search(search: string): Observable<IProduct[]> {
    const url = CONSTANTS.host + ENDPOINTS.search(search);
    return this.http.get<IProduct[]>(url);
  }

}
