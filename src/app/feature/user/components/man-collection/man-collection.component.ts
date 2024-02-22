import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';
import { ProductSize } from 'src/app/shared/models/productSizes.interface';

@Component({
  selector: 'app-man-collection',
  templateUrl: './man-collection.component.html',
  styleUrls: ['./man-collection.component.css']
})
export class ManCollectionComponent implements OnInit{
  constructor(private api:ApiService, private spinner:NgxSpinnerService){}
  manCollectionItem:ProductInterface[];
  filteredProducts:ProductInterface[];
  titleOfCollection:string = 'Muske majice';
  totalCountOfCollection:number;

  values: ProductSize = {
    sizeOne: 'S',
    sizeTwo: 'M',
    sizeThree: 'L',
    sizeFour: 'XL',
    sizeFive: 'XXL',
  };

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
        this.totalCountOfCollection = this.manCollectionItem.length;
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
