import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "./project";
import {of} from "rxjs/observable/of";
import {Social} from "./social"

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

  getExtendedProject(id: number): Observable<Project> {
    for(let i =0; i < this.projects.length; i++) {
      let project = this.projects[i];
      if (id == project.id) {
        project.socials = [{'id':1, 'url': 'topkek', 'name': 'name', 'color':'#123456', 'customName':'asd', 'icon':'facebook'}];
        project.images = ["https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350", 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350'];
        project.full_description = 'Site was originally build using Flask and static pages, now I remade it in Angular 5';
        return of(project);
      }
    }

  }
}
