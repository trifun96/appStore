import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductSize } from '../../models/productSizes.interface';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  @Input() values: ProductSize;
  @Output() priceFilterChanged = new EventEmitter<any>();
  @Output() clearFilters = new EventEmitter<void>();
  @Output() closeEvent = new EventEmitter<boolean>();
  @Output() acceptFilters = new EventEmitter<boolean>();
  @Output() subCategoryChange = new EventEmitter<{
    checked: boolean;
    subCategory: string;
  }>();
  @Output() sizeFilterChange = new EventEmitter<{
    checked: boolean;
    size: string;
  }>();
  range: number = 0;
  checkedCategories: { [key: string]: boolean } = {};
  checkedSizes: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.checkedCategories = JSON.parse(
      localStorage.getItem('selectedCategories') || '{}'
    );
    this.checkedSizes = JSON.parse(
      localStorage.getItem('selectedSize') || '{}'
    );
    this.range = parseInt(localStorage.getItem('selectedPrice') || '0');
  }

  onFilter(price: number) {
    this.range = price;
    localStorage.setItem('selectedPrice', price.toString());
    this.priceFilterChanged.emit(price);
  }

  onCheckboxChange(event: any, subCategory: string) {
    const checked = event.target.checked;
    this.subCategoryChange.emit({ checked, subCategory });

    this.checkedCategories[subCategory] = checked;
    localStorage.setItem(
      'selectedCategories',
      JSON.stringify(this.checkedCategories)
    );
  }

  onCheckboxSelectSize(event: any, size: string) {
    const checked = event.target.checked;
    this.sizeFilterChange.emit({ checked, size });
    this.checkedSizes[size] = checked;
    localStorage.setItem('selectedSize', JSON.stringify(this.checkedSizes));
  }

  clearFilter() {
    this.clearFilters.emit();
    this.closeEvent.emit();
    localStorage.removeItem('selectedCategories');
    localStorage.removeItem('selectedSize');
    localStorage.removeItem('selectedPrice');
  }

  acceptFilter() {
    this.acceptFilters.emit();
  }

  closeFilterMenu() {
    this.closeEvent.emit();
  }
}
