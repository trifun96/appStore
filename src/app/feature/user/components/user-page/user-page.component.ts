import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product-service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent {
  currentProduct: ProductInterface;

  constructor(private productService: ProductService, private router:Router) {
   this.productService.products$.subscribe(products => {
      this.currentProduct = products.length > 0 ? products[0] : null;
    });
  }

  nextProduct(): void {
    this.currentProduct = this.productService.getNextProduct();
  }

  previousProduct(): void {
    this.currentProduct = this.productService.getPreviousProduct();
  }

  toPantsNavigate(){
    this.router.navigate(['/man-pants'])
  }

  toSweatshirtNavigate() {
    this.router.navigate(['/man-sweatshirt'])
  }
}