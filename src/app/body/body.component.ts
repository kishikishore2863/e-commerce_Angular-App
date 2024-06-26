import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { subscribe } from 'node:diagnostics_channel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchFeature();
  }
  public fetchFeature() {
    this.http
      .get(
        'https://spardhaarivuapi-stage.azurewebsites.net/HomeAPI/api/FeaturedMagazineHomeList?SessionName=d9e53b79-b95d-4a84-a8ad-e912ce80a6b5&UserID=0'
      )
      .subscribe((res: any) => {
        this.data = res.data;
        // console.log(this.data);
      });
  }
}
