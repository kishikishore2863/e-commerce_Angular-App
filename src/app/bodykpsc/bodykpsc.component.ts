import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bodykpsc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bodykpsc.component.html',
})
export class BodykpscComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchFeature();
  }
  public fetchFeature() {
    this.http
      .get(
        ' https://spardhaarivuapi-stage.azurewebsites.net/HomeAPI/api/GroupCMagazineHomeList?SessionName=d9e53b79-b95d-4a84-a8ad-e912ce80a6b5&UserID=0'
      )
      .subscribe((res: any) => {
        this.data = res.data;
        // console.log(this.data);
      });
  }
}
