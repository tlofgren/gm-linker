// File: cgp-user-profile-dialog-module.ts
// Author: James L Seebach
// Date: 5/12/2017
// Desc: CGP User Profile module.
// Other Contributors:

import { NgModule } from '@angular/core';
import { MdButtonModule, MdDialogModule } from '@angular/material';

import { CgpUserProfileDialogComponent } from "./cgp-user-profile-dialog.component";
import { CgpUserProfileDialogService } from "./cgp-user-profile-dialog.service";

@NgModule({
    imports: [
        MdDialogModule, MdButtonModule
    ],
    exports: [
        CgpUserProfileDialogComponent
    ],
    declarations: [
        CgpUserProfileDialogComponent
    ],
    providers: [
        CgpUserProfileDialogService
    ],
    entryComponents: [
        CgpUserProfileDialogComponent
    ]
})
export class CgpUserProfileDialogModule {}