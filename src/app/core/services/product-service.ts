import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private currentIndex = 0;
  private filteredProducts: ProductInterface[] = [];
  private newCollectionItems: ProductInterface[] = [];
  private productsSubject = new BehaviorSubject<ProductInterface[]>([]);

  products$ = this.productsSubject.asObservable();

  constructor(private apiService: ApiService) {
    this.filterAndMapProducts();
  }

  private filterAndMapProducts() {
    this.apiService.getProducts().subscribe(
      (res) => {
        this.filteredProducts = Object.keys(res).map((key) => ({
          id: key,
          ...res[key],
        }));
        this.newCollectionItems = this.filteredProducts.filter(
          (element) => element.subCategory === 'Novo'
        );
        this.productsSubject.next(this.newCollectionItems);
      },
      (error) => {
        console.error(error);
      },
    );
  }

  getProducts(): ProductInterface[] {
    return this.productsSubject.value;
  }

  getNextProduct(): ProductInterface {
    const products = this.productsSubject.value;
    this.currentIndex = (this.currentIndex + 1) % products.length;
    return products[this.currentIndex];
  }

  getPreviousProduct(): ProductInterface {
    const products = this.productsSubject.value;
    this.currentIndex =
      (this.currentIndex - 1 + products.length) % products.length;
    return products[this.currentIndex];
  }
}