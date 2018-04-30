import {Component, Input, OnInit} from '@angular/core';
import {Project} from "@app/project";
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "@app/project.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getExtendedProject(id)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

}
