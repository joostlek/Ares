import { Component, OnInit } from '@angular/core';
import {Project} from "../project";
import { ActivatedRoute } from "@angular/router";
import {Language} from "../language";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  projects: Project[] = [
    new Project(1, 'Ares', [{id:1, name:'Python'}], [{id:1, name:'Angular 5'}]),
  ];
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

  }

}
