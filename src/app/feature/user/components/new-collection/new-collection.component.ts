import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['./new-collection.component.css']
})
export class NewCollectionComponent implements OnInit{
  constructor(private apiService:ApiService, private spinner:NgxSpinnerService) {}
  newCollectionItems:ProductInterface[];
  filteredProducts:ProductInterface[];
  titleOfCollection:string = 'Nova kolekcija'
  totalCountOfCollection:number;

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
        this.newCollectionItems = this.filteredProducts.filter(
          (element) => element.subCategory === 'Novo'
        );
        this.totalCountOfCollection = this.newCollectionItems.length
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
