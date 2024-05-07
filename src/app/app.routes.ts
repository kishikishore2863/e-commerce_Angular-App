import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browser', component: MainComponent },
];
export { routes };
