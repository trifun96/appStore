import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';
import { ProductSize } from 'src/app/shared/models/productSizes.interface';

@Component({
  selector: 'app-man-pants',
  templateUrl: './man-pants.component.html',
  styleUrls: ['./man-pants.component.css']
})
export class ManPantsComponent {
  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}
  manPantsCollection: ProductInterface[];
  filteredProducts: ProductInterface[];
  titleOfCollection:string = 'Muske pantalone';
  totalCountOfCollection:number;

  values: ProductSize = {
    sizeOne: '50',
    sizeTwo: '52',
    sizeThree: '54',
    sizeFour: '56',
    sizeFive: '58',
  };

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
        this.manPantsCollection = this.filteredProducts.filter(
          (element) => element.suitCategory === 'Pantalone'
        );
        this.totalCountOfCollection = this.manPantsCollection.length;
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
