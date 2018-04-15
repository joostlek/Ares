import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { PageHomeComponent } from './page-home/page-home.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
