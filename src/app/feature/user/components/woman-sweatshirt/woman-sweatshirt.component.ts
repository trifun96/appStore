import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-woman-sweatshirt',
  templateUrl: './woman-sweatshirt.component.html',
  styleUrls: ['./woman-sweatshirt.component.css']
})
export class WomanSweatshirtComponent {
  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}
  womanSweatshirtCollection: ProductInterface[];
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
        this.womanSweatshirtCollection = this.filteredProducts.filter(
          (element) => element.category === 'Muskarci' && element.suitCategory === 'Dukserice'
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
