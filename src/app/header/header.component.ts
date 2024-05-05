import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  data: any;
  bata: any;
  sanitizedData!: SafeHtml;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.fetchDetails();
    this.fetchAspirants();
  }

  public fetchDetails() {
    this.http
      .get(
        'https://spardhaarivuapi-stage.azurewebsites.net/HomeAPI/api/Highlights'
      )
      .subscribe((res: any) => {
        this.data = res.data[0].description;
        this.sanitizedData = this.sanitizer.bypassSecurityTrustHtml(this.data);
      });
  }
  public fetchAspirants() {
    this.http
      .get(
        'https://spardhaarivuapi-stage.azurewebsites.net/HomeAPI/api/HomeCommon'
      )
      .subscribe((res: any) => {
        this.bata = res.numberOfUsers;
      });
  }
}
