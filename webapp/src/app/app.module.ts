import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { PageHomeComponent } from './page-home/page-home.component';
import {AppRoutingModule} from "./app-routing.module";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageProjectComponent } from './page-project/page-project.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ProjectService} from "./project.service";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SocialComponent } from './social/social.component';
import {SlideshowModule} from "ng-simple-slideshow";


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    PageHomeComponent,
    ToolbarComponent,
    PageContactComponent,
    PageAboutComponent,
    PageProjectComponent,
    ProjectDetailComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    SlideshowModule,
  ],
  providers: [
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
