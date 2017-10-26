// File: app.module.ts
// Author: Joseph M Diaz
// Date: 4/20/2017
// Desc: Root module for the app.
// Other Contributors: Brandon Shreve

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdIconModule, MdMenuModule, MdSidenavModule } from '@angular/material';

import { CgpModule } from './cgp.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { ProjectProfileComponent } from "./project-profile/project-profile.component";
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommitHistoryService } from './commit-history.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MdToolbarModule,
        MdSidenavModule,
        MdMenuModule,
        MdButtonModule,
        MdIconModule,
        CgpModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoggedOutComponent,
        NotFoundComponent,
        UserProfileComponent,
        ProjectProfileComponent
    ],
    providers: [
        AppService,
        CommitHistoryService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
