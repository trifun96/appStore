import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api-service.service';
import { ProductInterface } from 'src/app/shared/models/productInterface.interdace';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
public products:ProductInterface[]

constructor(private api:ApiService){}

ngOnInit(): void {
  this.getProducts()
}

getProducts() {
  this.api.getProducts().subscribe((res) => {
    this.products = Object.keys(res).map(key => ({ id: key, ...res[key] }));
    console.log(this.products, 'res');
  });
}

}
