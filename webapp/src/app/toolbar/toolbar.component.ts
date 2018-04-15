import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  url: string;
  constructor(private location: Location) {
  }

  ngOnInit() {
    this.url = this.location.path();
  }

}
