import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
})
export class MobileMenuComponent {
  @Output() closeEvent = new EventEmitter<boolean>();
  isShowManMobileMenu: boolean = false;
  isShowWomanMobileMenu: boolean = false;
  


  constructor(private router:Router){
  }

  showManMenu() {
    this.isShowManMobileMenu = true;
    this.isShowWomanMobileMenu = false;
  }

  showWomanMenu() {
    this.isShowWomanMobileMenu = true;
    this.isShowManMobileMenu = false;
  }

  redirectToManTshirtCollection(){
    this.router.navigate(['man-collection'])
  }

  redirectToManSweatshirtCollection() {}

  redirectToWomanTshirtCollection(){
    this.router.navigate(['woman-collection'])
  }

  redirectToWomanSweatshirtCollection(){}

  closeMenuBar() {
  this.closeEvent.emit(false)
  }
}
