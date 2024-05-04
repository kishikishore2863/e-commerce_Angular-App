import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'browser', component: MainComponent },
];
export { routes };
