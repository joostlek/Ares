import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../project";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() extended: boolean = true;
  @Input() project: Project;
  constructor() { }

  ngOnInit() {

  }

}
