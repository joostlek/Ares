import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {PageHomeComponent} from "@app/page-home/page-home.component";
import {PageAboutComponent} from "@app/page-about/page-about.component";
import {PageProjectComponent} from "@app/page-project/page-project.component";
import {ProjectDetailComponent} from "@app/project-detail/project-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
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
