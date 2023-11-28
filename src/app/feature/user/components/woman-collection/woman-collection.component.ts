import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-woman-collection',
  templateUrl: './woman-collection.component.html',
  styleUrls: ['./woman-collection.component.css'],
})
export class WomanCollectionComponent implements OnInit {
  constructor(private api: ApiService, private spinner: NgxSpinnerService) {}
  public womenCollectionItem: ProductInterface[];
  public filteredProducts: ProductInterface[];

  ngOnInit() {
    this.showSpinner();
    this.filterAndMapProducts();
  }

  private filterAndMapProducts() {
    this.api.getProducts().subscribe(
      (res) => {
        this.filteredProducts = Object.keys(res).map((key) => ({
          id: key,
          ...res[key],
        }));
        this.womenCollectionItem = this.filteredProducts.filter(
          (element) => element.category === 'Zene'
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
