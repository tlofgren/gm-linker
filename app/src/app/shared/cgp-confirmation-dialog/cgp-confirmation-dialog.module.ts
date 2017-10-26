// File: cgp-confirmation-dialog.module.ts
// Author: Joseph M Diaz
// Date: 4/28/2017
// Desc: CGP Confirmation Dialog.
// Other Contributors:

import { NgModule } from '@angular/core';
import { MdDialogModule, MdButtonModule } from '@angular/material';

import { CgpConfirmationDialogService } from './cgp-confirmation-dialog.service';
import { CgpConfirmationDialogComponent }   from './cgp-confirmation-dialog.component';

@NgModule({
    imports: [
        MdDialogModule, MdButtonModule
    ],
    exports: [
        CgpConfirmationDialogComponent
    ],
    declarations: [
        CgpConfirmationDialogComponent
    ],
    providers: [
        CgpConfirmationDialogService
    ],
    entryComponents: [
        CgpConfirmationDialogComponent
    ],
})
export class CgpConfirmationDialogModule { }