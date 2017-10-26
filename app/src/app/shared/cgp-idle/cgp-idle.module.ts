// File: cgp-idle-dialog.module.ts
// Author: Joseph M Diaz
// Date: 6/8/2017
// Desc: CGP Idle / Token Refresh timers and idle dialog.
// Other Contributors:

import { NgModule } from '@angular/core';
import { MdDialogModule, MdButtonModule } from '@angular/material';

import { CgpIdleService } from './cgp-idle.service';
import { CgpIdleDialogComponent }   from './cgp-idle-dialog/cgp-idle-dialog.component';

@NgModule({
    imports: [
        MdDialogModule, MdButtonModule
    ],
    exports: [
        CgpIdleDialogComponent
    ],
    declarations: [
        CgpIdleDialogComponent
    ],
    providers: [
        CgpIdleService
    ],
    entryComponents: [
        CgpIdleDialogComponent
    ],
})
export class CgpIdleModule { }