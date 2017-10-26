// File: cgp-alert-dialog.module.ts
// Author: Joseph M Diaz
// Date: 4/27/2017
// Desc: CGP Alert Dialog to use instead of js alert.
// Other Contributors:

import { NgModule } from '@angular/core';
import { MdDialogModule, MdButtonModule } from '@angular/material';

import { CgpAlertDialogService } from './cgp-alert-dialog.service';
import { CgpAlertDialogComponent }   from './cgp-alert-dialog.component';

@NgModule({
    imports: [
        MdDialogModule, MdButtonModule
    ],
    exports: [
        CgpAlertDialogComponent
    ],
    declarations: [
        CgpAlertDialogComponent
    ],
    providers: [
        CgpAlertDialogService
    ],
    entryComponents: [
        CgpAlertDialogComponent
    ],
})
export class CgpAlertDialogModule { }