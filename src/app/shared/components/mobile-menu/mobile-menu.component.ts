import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
})
export class MobileMenuComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<boolean>(false);
  isShowManMobileMenu: boolean = false;
  isShowWomanMobileMenu: boolean = false;
  isOpenDropDown: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isShowManMobileMenu = true;
  }

  showManMenu() {
    this.isShowManMobileMenu = true;
    this.isShowWomanMobileMenu = false;
  }

  showWomanMenu() {
    this.isShowWomanMobileMenu = true;
    this.isShowManMobileMenu = false;
  }

  redirectToManTshirtCollection() {
    this.router.navigate(['man-collection']);
    this.submitEvent.emit()
  }

  redirectToPantCollection() {
    this.router.navigate(['man-pants']);
    this.submitEvent.emit();
  }

  redirectToWomanTshirtCollection() {
    this.router.navigate(['woman-collection']);
    this.submitEvent.emit();
  }

  openDropdown() {
    this.isOpenDropDown = !this.isOpenDropDown;
  }
}
