// File: cgp-app-bar.module.ts
// Author: Joseph M Diaz
// Date: 5/11/2017
// Desc: CGP App Bar that has the company logo, navigation toggle, and user menu toggle.
// Other Contributors:

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdButtonModule, MdIconModule } from "@angular/material";

import { CgpAppBarService } from './cgp-app-bar.service';
import { CgpAppBarComponent } from './cgp-app-bar.component';
import { CgpAppBarMenuModule } from './cgp-app-bar-menu/cgp-app-bar-menu.module';

@NgModule({
    imports: [
        CommonModule,
        MdToolbarModule,
        MdButtonModule,
        MdIconModule,
        CgpAppBarMenuModule
    ],
    exports: [
        CgpAppBarComponent
    ],
    declarations: [
        CgpAppBarComponent
    ],
    providers: [
        CgpAppBarService
    ],
    entryComponents: [
        CgpAppBarComponent
    ],
})
export class CgpAppBarModule { }