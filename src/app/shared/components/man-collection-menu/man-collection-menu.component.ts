import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-man-collection-menu',
  templateUrl: './man-collection-menu.component.html',
  styleUrls: ['./man-collection-menu.component.css']
})
export class ManCollectionMenuComponent {
  isOpenManCollectionMenu:boolean = false;
  isOpenWomanCollectionMenu:boolean = false;

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

  openNewCollection(){
    this.router.navigate(['new-collection'])
  }

  openSweatshirtManCollection() {
    this.router.navigate(['man-sweatshirt'])
  }
}
