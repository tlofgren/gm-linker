// File: cgp-alert-dialog.service.ts
// Author: Joseph M Diaz
// Date: 4/27/2017
// Desc: CGP Alert Dialog to use instead of js alert.
// Other Contributors:

import { Injectable } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';

import { CgpAlertDialogComponent } from './cgp-alert-dialog.component';

const defaults = {
    title: '',
    message: '',
    alert: '',
    height: '',
    width: '',
    closeLabel: 'Close',
    onClosed: null
};

@Injectable()
export class CgpAlertDialogService {
    constructor(private dialog: MdDialog) {}
    
    showAlertDialog(opts) {
        let options = {
            ...defaults,
            ...opts
        };

        let dialogRef: MdDialogRef<CgpAlertDialogComponent>;

        dialogRef = this.dialog.open(CgpAlertDialogComponent, options);
        dialogRef.componentInstance.title = options.title;
        dialogRef.componentInstance.message = options.message;
        dialogRef.componentInstance.alert = options.alert;
        dialogRef.componentInstance.closeLabel = options.closeLabel;

        dialogRef.afterClosed().subscribe(result => {
            if (options.onClosed) {
                options.onClosed();
            }
        });

        return dialogRef;
    }
}