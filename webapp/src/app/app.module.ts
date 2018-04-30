import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatIconModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from '@app/app.component';
import { ProjectComponent } from '@app/project/project.component';
import { PageHomeComponent } from '@app/page-home/page-home.component';
import {AppRoutingModule} from "@app/app-routing.module";
import { ToolbarComponent } from '@app/toolbar/toolbar.component';
import { PageAboutComponent } from '@app/page-about/page-about.component';
import { PageProjectComponent } from '@app/page-project/page-project.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ProjectService} from "@app/project.service";
import { ProjectDetailComponent } from '@app/project-detail/project-detail.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SocialComponent } from '@app/social/social.component';
import {SlideshowModule} from "ng-simple-slideshow";
import {InfoService} from "@app/info.service";


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    PageHomeComponent,
    ToolbarComponent,
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
    MatIconModule,
  ],
  providers: [
    ProjectService,
    InfoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
