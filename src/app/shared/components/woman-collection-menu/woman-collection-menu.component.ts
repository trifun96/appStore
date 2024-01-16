import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-woman-collection-menu',
  templateUrl: './woman-collection-menu.component.html',
  styleUrls: ['./woman-collection-menu.component.css'],
})
export class WomanCollectionMenuComponent {
  isOpenManCollectionMenu: boolean = false;
  isOpenWomanCollectionMenu: boolean = false;

  constructor(private router: Router) {}

  openManCollectionMenu() {
    this.isOpenManCollectionMenu = true;
  }

  openWomanCollectionMenu() {
    this.isOpenWomanCollectionMenu = true;
  }

  openCollection() {
    this.router.navigate(['woman-collection']);
  }

  openNewCollection(){
    this.router.navigate(['new-collection'])
  }
}
