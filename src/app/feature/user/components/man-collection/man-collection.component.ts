import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-man-collection',
  templateUrl: './man-collection.component.html',
  styleUrls: ['./man-collection.component.css']
})
export class ManCollectionComponent implements OnInit{
  constructor(private api:ApiService, private spinner:NgxSpinnerService){}
  manCollectionItem:ProductInterface[];
  filteredProducts:ProductInterface[];

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
        this.manCollectionItem = this.filteredProducts.filter(
          (element) => element.category === 'Muskarci'
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
