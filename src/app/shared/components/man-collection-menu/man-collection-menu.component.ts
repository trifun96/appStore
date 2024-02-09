import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-man-collection-menu',
  templateUrl: './man-collection-menu.component.html',
  styleUrls: ['./man-collection-menu.component.css']
})
export class ManCollectionMenuComponent {
  isOpenManCollectionMenu:boolean;
  isOpenWomanCollectionMenu:boolean;
  isOpenDropDown:boolean;

  constructor(private router:Router) {}

  openManCollectionMenu() {
this.isOpenManCollectionMenu = true
  }

  openWomanCollectionMenu() {
    this.isOpenWomanCollectionMenu = true
  }

  openCollection() {
this.router.navigate(['man-collection'])
  }

  openSweatshirtManCollection() {
    this.router.navigate(['man-pants'])
  }

  openDropdown(){
    this.isOpenDropDown = !this.isOpenDropDown;
  }
}
