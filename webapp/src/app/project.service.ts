import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "./project";
import {of} from "rxjs/observable/of";

@Injectable()
export class ProjectService {
  projects: Project[] = [
    new Project(1, 'Ares', [{id:1, name:'Python'}], [{id:1, name:'Angular 5'}]),
    new Project(2, 'Ares', [{id:1, name:'Python'}], [{id:1, name:'Angular 5'}]),
  ];
  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
}
