import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browser', component: MainComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
];
export { routes };
