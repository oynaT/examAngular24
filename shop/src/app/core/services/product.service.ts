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

}
