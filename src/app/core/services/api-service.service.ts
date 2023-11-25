import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';
import { Observable, map } from 'rxjs';
import { ArticleResponseInterface } from 'src/app/shared/models/articleResponse.interface';
import { OrderInterface } from 'src/app/shared/models/order.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://my-web-store-dcff0-default-rtdb.europe-west1.firebasedatabase.app/products.json';
  private orderUlr = 'https://my-web-store-dcff0-default-rtdb.europe-west1.firebasedatabase.app/orders.json';
  private users = 'https://my-web-store-dcff0-default-rtdb.europe-west1.firebasedatabase.app/users.json';
  private registerUsers = 'https://my-web-store-dcff0-default-rtdb.europe-west1.firebasedatabase.app/registerUsers.json';

  postRegistrationUser(data: any) {
    return this.http.post<any>(this.registerUsers, data);
  }

  postLoginUser(data: any) {
    return this.http.post<any>(this.users, data);
  }

  getRegistrationUser() {
    return this.http.get<any>(this.registerUsers);
  }

  postProducts(data: ProductInterface) {
    return this.http.post<any>(this.baseUrl, data);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  deleteProducts(id: number):Observable<any> {
    const url = `https://my-web-store-dcff0-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`;
    return this.http.delete<any>(url);
  }

  updateProducts(data: any, id: number) {
    const url = `https://my-web-store-dcff0-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`;
    return this.http.put<any>(url, data);
  }

  postOrders(data: OrderInterface) {
    return this.http.post<any>(this.orderUlr, data);
  }

  getOrders(): Observable<any> {
    return this.http.get<any>(this.orderUlr);
  }

  deleteOrder(orderId: number): Observable<any> {
    const url = `https://my-web-store-dcff0-default-rtdb.europe-west1.firebasedatabase.app/orders/${orderId}.json`;
    return this.http.delete<any>(url);
  }
}
