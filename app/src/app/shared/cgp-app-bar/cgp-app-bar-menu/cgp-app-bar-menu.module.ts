// File: cgp-app-bar-menu-module.ts
// Author: James L Seebach
// Date: 5/12/2017
// Desc: CGP App Bar Menu module.
// Other Contributors:

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdMenuModule, MdButtonModule, MdIconModule } from "@angular/material";

import { CgpAppBarMenuComponent } from "./cgp-app-bar-menu.component";
import { CgpUserProfileDialogModule } from "../../cgp-user-profile-dialog/cgp-user-profile-dialog.module";
import { CgpUserProfileDialogService } from "../../cgp-user-profile-dialog/cgp-user-profile-dialog.service";

@NgModule({
    imports: [
        CommonModule, MdCardModule, MdMenuModule, MdButtonModule, MdIconModule, CgpUserProfileDialogModule
    ],
    exports: [
        CgpAppBarMenuComponent
    ],
    declarations: [
        CgpAppBarMenuComponent
    ],
    providers: [
        CgpUserProfileDialogService
    ]
})
export class CgpAppBarMenuModule {}
