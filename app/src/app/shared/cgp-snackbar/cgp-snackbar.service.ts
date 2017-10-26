// File: cgp-snackbar.service.ts
// Author: Joseph M Diaz
// Date: 5/4/2017
// Desc: CGP Snackbar component.
// Other Contributors:

import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

const defaults = {
    message: '',
    action: '',
    type: 'accept',
    duration: 3000,
    onAction: null
};

@Injectable()
export class CgpSnackbarService {
    constructor(private snackbar: MdSnackBar) {}

    showSnackbar(opts) {
        let options = {
            ...defaults,
            ...opts
        };
        let snackbarRef = this.snackbar.open(options.message, options.action, { duration: options.duration, extraClasses: [options.type] });

        snackbarRef.onAction().subscribe(() => {
            if (options.onAction) {
                options.onAction();
            }
        });

        return snackbarRef;
    }
}