import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {PageHomeComponent} from "./page-home/page-home.component";
import {PageContactComponent} from "./page-contact/page-contact.component";
import {PageAboutComponent} from "./page-about/page-about.component";
import {PageProjectComponent} from "./page-project/page-project.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'contact', component: PageContactComponent},
  {path: 'about', component: PageAboutComponent},
  {path: 'project', component: PageProjectComponent},
  {path: 'home', component: PageHomeComponent},
  {path: 'project/:id', component: ProjectDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
