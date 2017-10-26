// File: cgp-confirmation-dialog.component.ts
// Author: Joseph M Diaz
// Date: 4/28/2017
// Desc: CGP Confirmation Dialog.
// Other Contributors:

import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'cgp-confirmation-dialog',
    templateUrl: './cgp-confirmation-dialog.template.html'
})
export class CgpConfirmationDialogComponent {
    @Input() title;
    @Input() message;
    @Input() alert;
    @Input() yesLabel;
    @Input() noLabel;
    @Input() onYesClick;
    @Input() onNoClick;

    constructor(public dialogRef: MdDialogRef<CgpConfirmationDialogComponent>) { }

    handleYesClick() {
        if (this.onYesClick) {
            this.onYesClick();
        }
    }

    handleNoClick() {
        if (this.onNoClick) {
            this.onNoClick();
        }
    }
}