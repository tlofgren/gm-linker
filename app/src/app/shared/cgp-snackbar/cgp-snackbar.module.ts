// File: cgp-snackbar.module.ts
// Author: Joseph M Diaz
// Date: 5/4/2017
// Desc: CGP Snackbar component.
// Other Contributors:

import { NgModule } from '@angular/core';

import { MdSnackBarModule } from '@angular/material';
import { CgpSnackbarService } from './cgp-snackbar.service';

@NgModule({
    imports: [ MdSnackBarModule ], 
    providers: [
        CgpSnackbarService
    ]
})
export class CgpSnackbarModule { }