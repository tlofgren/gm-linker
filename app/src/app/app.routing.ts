// File: app.routing.ts
// Author: Joseph M Diaz
// Date: 4/24/2017
// Desc: Root routing for the app.
// Other Contributors:

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'logged-out', component: LoggedOutComponent },
  { path: 'profile/:id', component: UserProfileComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {};