// File: cgp-alert-dialog.component.ts
// Author: Joseph M Diaz
// Date: 4/27/2017
// Desc: CGP Alert Dialog to use instead of js alert.
// Other Contributors:

import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'cgp-alert-dialog',
    templateUrl: './cgp-alert-dialog.template.html'
})
export class CgpAlertDialogComponent {
    @Input() title;
    @Input() message;
    @Input() alert;
    @Input() closeLabel;

    constructor(public dialogRef: MdDialogRef<CgpAlertDialogComponent>) { }
}