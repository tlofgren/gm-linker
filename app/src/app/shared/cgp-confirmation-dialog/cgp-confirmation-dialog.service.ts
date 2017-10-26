// File: cgp-confirmation-dialog.service.ts
// Author: Joseph M Diaz
// Date: 4/28/2017
// Desc: CGP Confirmation Dialog.
// Other Contributors:

import { Injectable } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import { CgpConfirmationDialogComponent } from './cgp-confirmation-dialog.component';

const defaults = {
    title: '',
    message: '',
    alert: '',
    height: '',
    width: '',
    disableClose: true,
    yesLabel: 'Yes',
    noLabel: 'No',
    onYesClick: null,
    onNoClick: null,
    onClosed: null
};

@Injectable()
export class CgpConfirmationDialogService {
    constructor(private dialog: MdDialog) { }

    dialogRef: MdDialogRef<CgpConfirmationDialogComponent>;

    showConfirmationDialog(opts) {
        let options = {
            ...defaults,
            ...opts
        };

        if (this.dialogRef && this.dialogRef.componentInstance) {
            throw 'You can only have one CGP Confirmation Dialog open at a time.';
        }

        this.dialogRef = this.dialog.open(CgpConfirmationDialogComponent, options);
        this.dialogRef.componentInstance.title = options.title;
        this.dialogRef.componentInstance.message = options.message;
        this.dialogRef.componentInstance.alert = options.alert;
        this.dialogRef.componentInstance.yesLabel = options.yesLabel;
        this.dialogRef.componentInstance.noLabel = options.noLabel;
        this.dialogRef.componentInstance.onYesClick = options.onYesClick;
        this.dialogRef.componentInstance.onNoClick = options.onNoClick;

        this.dialogRef.afterClosed().subscribe(result => {
            if (options.onClosed) {
                options.onClosed();
            }
        });

        return this.dialogRef;
    }

    closeConfirmationDialog() {
        this.dialogRef.close();
    }
}
