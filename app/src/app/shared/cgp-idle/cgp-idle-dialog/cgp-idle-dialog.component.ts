// File: cgp-idle-dialog.component.ts
// Author: Joseph M Diaz
// Date: 6/8/2017
// Desc: CGP logout warning dialog.
// Other Contributors:

import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'cgp-idle-dialog',
    templateUrl: './cgp-idle-dialog.template.html'
})
export class CgpIdleDialogComponent {
    @Input() countdown;
    @Input() serviceRef;

    constructor(public dialogRef: MdDialogRef<CgpIdleDialogComponent>) { }

    logout() {
        window.location.replace('#/logged-out');
    }
}