import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-man-sweatshirt',
  templateUrl: './man-sweatshirt.component.html',
  styleUrls: ['./man-sweatshirt.component.css'],
})
export class ManSweatshirtComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}
  manSweatshirtCollection: ProductInterface[];
  filteredProducts: ProductInterface[];

  ngOnInit() {
    this.showSpinner();
    this.filterAndMapProducts();
  }

  private filterAndMapProducts() {
    this.apiService.getProducts().subscribe(
      (res) => {
        this.filteredProducts = Object.keys(res).map((key) => ({
          id: key,
          ...res[key],
        }));
        this.manSweatshirtCollection = this.filteredProducts.filter(
          (element) => element.subCategory === 'Novo'
        );
      },
      (error) => console.error(error),
      () => this.hideSpinner()
    );
  }

  private showSpinner(): void {
    this.spinner.show();
  }

  private hideSpinner(): void {
    this.spinner.hide();
  }
}
