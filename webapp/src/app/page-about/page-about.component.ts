import { Component, OnInit } from '@angular/core';
import {InfoService} from "@app/info.service";

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.css']
})
export class PageAboutComponent implements OnInit {
  info: any;
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo(): void {
    this.infoService.getInfo()
      .subscribe(info => this.info = info);
  }
}
