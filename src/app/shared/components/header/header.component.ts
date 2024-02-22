import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/userInterface.interface';
import { AuthService } from 'src/app/core/services/auth-service.service';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart-service.service';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('collectionMenu') collectionMenu: ElementRef;
  isLoggedIn: boolean;
  currentUser: User | null;
  totalItem$: Observable<number> = new Observable<number>();
  totalFavoriteItem$: Observable<number> = new Observable<number>();
  public isShowMenu:boolean;
  public mobileMenu:boolean = false;
  public isOpenSideCart:boolean = false
  isOpenManCollectionMenu:boolean = false;
  isOpenWomanCollectionMenu:boolean = false;

  menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Product Page', link: '/product-page' },
    { label: "Woman's Collection", link: '/woman-collection' },
    { label: "Man's Collection", link: '/man-collection' },
    { label: 'New Collection', link: '/new-collection' }
];

  constructor(
    private authService: AuthService,
    private cart: CartService,
    private favoriteService: FavoriteService,
    public translate:TranslateService,
    private router:Router,
  ) {
    translate.addLangs(['en', 'sr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|sr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((currentUser) => {
      this.currentUser = currentUser;
      this.isLoggedIn = currentUser ? true : false;

      if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
    });
    this.isLoggedIn = this.authService.isLoggedIn();
    this.totalItem$ = this.cart.totalItem$;
    this.totalFavoriteItem$ = this.favoriteService.totalFavoriteItem$;
  }


  isAdmin(): boolean {
    return this.authService.getRole() === 'admin';
  }

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu
    var navMenu = document.getElementById("navMenu");
    navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
    console.log('test1')
}

  closeMenu(event) {
    const navMenu = document.getElementById("navMenu");
    navMenu.style.display = "none"
    this.isShowMenu = false;
  }

  closeMenuBar() {
    this.isShowMenu = false
  }

  logout() {
    this.authService.logout();
    this.currentUser = null;
    this.isLoggedIn = false;
  }

  openSideCart() {
    this.isOpenSideCart = !this.isOpenSideCart
  }

  closeSideCart(){
    this.isOpenSideCart = false
  }

  openManCollectionMenu() {
this.isOpenManCollectionMenu = true;
  }

  openWomanCollectionMenu() {
    this.isOpenWomanCollectionMenu = true
  }

  closeManCollectionMenu() {
    this.isOpenManCollectionMenu = false
  }

  closeWomanCollectionMenu() {
    this.isOpenWomanCollectionMenu = false
  }

  handleClickOutside() {
    if (this.isOpenManCollectionMenu || this.isOpenWomanCollectionMenu) {
      const clickedInside = this.collectionMenu.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.isOpenManCollectionMenu = false;
        this.isOpenWomanCollectionMenu = false;
      }
    }
  }

  navigateToHome() {
    this.router.navigate(['/'])
  }
}
