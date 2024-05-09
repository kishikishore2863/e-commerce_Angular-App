import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel02Component } from '../carousel/carousel.component';
import { BodyComponent } from '../body/body.component';
import { BodykpscComponent } from '../bodykpsc/bodykpsc.component';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterLink, Carousel02Component, BodyComponent, BodykpscComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
