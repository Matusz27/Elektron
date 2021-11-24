import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { CardComponent } from './componets/card/card.component';
import { ItemsDisplayComponent } from './pages/main-page/main-page.component';
import { CartComponent } from './componets/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartBodyComponent } from './componets/cart-body/cart-body.component';
import { CartCardComponent } from './componets/cart-card/cart-card.component';
import { AddRemoveButtonComponent } from './componets/add-remove-button/add-remove-button.component';
import { AddRemoveButtonCartComponent } from './componets/add-remove-button-cart/add-remove-button-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    ItemsDisplayComponent,
    CartComponent,
    CartPageComponent,
    CartBodyComponent,
    CartCardComponent,
    AddRemoveButtonComponent,
    AddRemoveButtonCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
