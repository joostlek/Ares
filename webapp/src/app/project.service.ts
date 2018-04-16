import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "./project";
import {of} from "rxjs/observable/of";

@Injectable()
export class ProjectService {
  projects: Project[] = [
    new Project(1, 'Ares', 'My personal website, remade in Angular 5', [{id:1, name:'Python'}], [{id:1, name:'Angular 5'}]),
    new Project(2, 'Dionysos', '', [{id:1, name:'Python'}], [{id:1, name:'Angular 5'}]),
    new Project(3, 'Hermes', '', [{id:1, name:'Python'}], [{id:1, name:'Angular 5'}]),
    new Project(4, 'Ares', '', [{id:1, name:'Python'}], [{id:1, name:'Angular 5'}]),
    new Project(5, 'Ares', '', [{id:1, name:'Python'}], [{id:1, name:'Angular 5'}]),
  ];
  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(id: number): Observable<Project> {
    for(let i =0; i < this.projects.length; i++) {
      let project = this.projects[i];
      if (id == project.id) {
        return of(project);
      }
    }
  }
}
