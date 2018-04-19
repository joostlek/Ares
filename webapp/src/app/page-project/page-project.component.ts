import { Component, OnInit } from '@angular/core';
import {Project} from "../project";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-page-project',
  templateUrl: './page-project.component.html',
  styleUrls: ['./page-project.component.css']
})
export class PageProjectComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}
