import { ItemsDisplayComponent } from './pages/main-page/main-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:ItemsDisplayComponent},
  {path: 'cart', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
