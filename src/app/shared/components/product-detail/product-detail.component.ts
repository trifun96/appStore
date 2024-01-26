import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductInterface } from '../../models/productInterface.interdace';
import { CartService } from 'src/app/core/services/cart-service.service';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private cart: CartService,
    private favoriteService: FavoriteService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  @Input() data: ProductInterface;
  @Output() closeProductModal = new EventEmitter<any>();
  public selectedSize: string = '';

  ngOnInit(): void {
    const sizes = document.querySelectorAll('.circle-icon');
    sizes.forEach((size) => {
      size.addEventListener('click', function () {
        size.classList.toggle('clicked');
      });
    });
  }

  toSelectedSize(size: string) {
    const sizes = document.querySelectorAll('.circle-icon');
    sizes.forEach((element) => {
      element.classList.remove('clicked');
    });
    this.selectedSize = size;
  }

  addToCartItem(product: ProductInterface) {
    if (!this.selectedSize) {
      this.toastr.warning('Please select a size before adding to the cart.');
      return;
    }

    const isProductSameSize = (item) =>
      item.id === product.id && item.size === this.selectedSize;
    const existingProductIndex =
      this.cart.cartItemList.findIndex(isProductSameSize);

    if (existingProductIndex !== -1) {
      this.cart.cartItemList[existingProductIndex].quantity += 1;
    } else {
      const productWithSize: ProductInterface = {
        ...product,
        size: this.selectedSize,
        quantity: 1,
      };

      this.cart.cartItemList.push(productWithSize);
    }

    this.updateCart();
  }

  private updateCart() {
    this.cart.cartList$.next(this.cart.cartItemList);
    this.cart.totalItem$.next(this.cart.cartItemList.length);
    this.cart.saveCartItemsToLocalStorage();

    this.selectedSize = '';
    this.closeProductModal.emit();
    this.toastr.success('You have successfully added the product to the cart.');
  }

  buyNowProduct(data: ProductInterface) {
    if (this.selectedSize) {
      const productWithData: ProductInterface = {
        ...data,
        size: this.selectedSize,
      };
      this.cart.addToCart(productWithData);
      this.closeProductModal.emit();
      this.router.navigate(['/order-form']);
    } else {
      this.toastr.warning('Please select a size before going to payment');
    }
  }

  addToFavorite(favoriteData: ProductInterface) {
    this.favoriteService.addFavoriteItem(favoriteData);
    this.toastr.success('You are successfully added product to favorite.');
  }

  closeButton(){
    this.closeProductModal.emit(true);
  }
}
