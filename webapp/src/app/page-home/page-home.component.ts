import { Component, OnInit } from '@angular/core';
import { Project } from "@app/project";
import { ActivatedRoute } from "@angular/router";
import {ProjectService} from "@app/project.service";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  projects: Project[];
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}
