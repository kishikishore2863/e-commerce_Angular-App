import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
