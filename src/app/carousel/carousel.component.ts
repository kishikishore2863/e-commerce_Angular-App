import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
} from '@coreui/angular';

@Component({
  selector: 'docs-carousel02',
  templateUrl: './carousel02.component.html',

  standalone: true,
  imports: [
    ThemeDirective,
    CarouselComponent,
    CarouselInnerComponent,
    NgFor,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink,
  ],
})
export class Carousel02Component implements OnInit {
  // data: any[] = new Array(3).fill({
  //   id: -1,
  //   src: '',
  //   title: '',
  //   subtitle: '',
  // });
  data: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchFeaturedMagazines();
  }
  public fetchFeaturedMagazines(): void {
    this.http
      .get<any>(
        'https://spardhaarivuapi-stage.azurewebsites.net/HomeAPI/api/BannerList?BannerType=Header'
      )
      .subscribe((res: any) => {
        this.data = res.data;
      });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-carousel',
//   templateUrl: './carousel.component.html',
// })
// export class CarouselComponent implements OnInit {

// }
