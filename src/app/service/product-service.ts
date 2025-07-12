import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl).pipe(map((res) => res));
  }

  public save(product: Omit<ProductModel, 'id'>): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.baseUrl, product);
  }

  public update(id: number, product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.baseUrl}/${id}`, product);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
