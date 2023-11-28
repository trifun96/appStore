import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
public products:ProductInterface[]

constructor(private api:ApiService, private spinner:NgxSpinnerService){}

ngOnInit() {
  this.showSpinner();
  this.getProducts();
}

private getProducts() {
  this.api.getProducts().subscribe(
    (res) => {
      this.products = Object.keys(res).map((key) => ({
        id: key,
        ...res[key],
      }));
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
