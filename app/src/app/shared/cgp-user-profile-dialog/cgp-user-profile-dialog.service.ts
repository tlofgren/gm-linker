// File: cgp-user-profile-dialog-service.ts
// Author: James L Seebach
// Date: 5/12/2017
// Desc: CGP User Profile service.
// Other Contributors:

import { Injectable } from "@angular/core";
import { CgpUserProfileDialogComponent } from "./cgp-user-profile-dialog.component";
import { MdDialog, MdDialogRef } from "@angular/material";

const defaults = {
    size: null,
    title: '',
    closeLabel: '',
};

@Injectable()
export class CgpUserProfileDialogService {
    constructor(private dialog: MdDialog) { }

    dialogRef: MdDialogRef<CgpUserProfileDialogComponent>;

    showUserProfileDialog(opts) {
        let options = {
            ...defaults,
            ...opts
        };

        if (this.dialogRef && this.dialogRef.componentInstance) {
            throw 'You can only have one User Profile Dialog open at a time.';
        }

        this.dialogRef = this.dialog.open(CgpUserProfileDialogComponent, options);
        this.dialogRef.componentInstance.title = options.title;
        this.dialogRef.componentInstance.closeLabel = options.closeLabel;

        return this.dialogRef;
    }
}
