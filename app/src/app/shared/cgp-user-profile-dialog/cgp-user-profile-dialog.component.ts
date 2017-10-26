// File: cgp-user-profile-dialog-component.ts
// Author: James L Seebach
// Date: 5/12/2017
// Desc: CGP User Profile component.
// Other Contributors:

import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component ({
    selector: "cgp-app-bar-dialog",
    templateUrl: "./cgp-user-profile-dialog.template.html"
})
export class CgpUserProfileDialogComponent {

    @Input() size;
    @Input() title;
    @Input() closeLabel;

    constructor(public dialogRef: MdDialogRef<CgpUserProfileDialogComponent>) { }
}
