import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './components/user-page/user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { MatStepperModule } from '@angular/material/stepper';
import { ProductComponent } from './components/product-component/product-component.component';
import { CartComponent } from './components/cart-component/cart-component.component';
import { FavoriteComponent } from './components/favorite-component/favorite-component.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterInformationComponent } from './components/footer-information/footer-information.component';
import { BannerPageComponent } from './components/banner-page/banner-page.component';
import { NewCollectionComponent } from './components/new-collection/new-collection.component';
import { ManCollectionComponent } from './components/man-collection/man-collection.component';
import { WomanCollectionComponent } from './components/woman-collection/woman-collection.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { ManSweatshirtComponent } from './components/man-sweatshirt/man-sweatshirt.component';
import { WomanSweatshirtComponent } from './components/woman-sweatshirt/woman-sweatshirt.component';

@NgModule({
  declarations: [
    UserPageComponent,
    ProductComponent,
    CartComponent,
    FavoriteComponent,
    OrderFormComponent,
    NewsletterComponent,
    FooterInformationComponent,
    BannerPageComponent,
    NewCollectionComponent,
    ManCollectionComponent,
    WomanCollectionComponent,
    AllProductsComponent,
    RegistrationComponent,
    RegistrationFormComponent,
    ModalComponent,
    ManSweatshirtComponent,
    WomanSweatshirtComponent,
  ],

    imports: [ CommonModule, UserRoutingModule, StoreModule, SharedModule, MatStepperModule, TranslateModule, MatIconModule, MatButtonModule]
})
export class UserModule { }
