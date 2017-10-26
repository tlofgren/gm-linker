// File: cgp-app-bar.component.ts
// Author: Joseph M Diaz
// Date: 5/11/2017
// Desc: CGP App Bar that has the company logo, navigation toggle, and user menu toggle.
// Other Contributors:

import { Injectable } from '@angular/core';

@Injectable()
export class CgpAppBarService {
    cgpApBarComponent;

    logout() {
        if (!this.cgpApBarComponent) {
            return;
        }

        this.cgpApBarComponent.showNavToggle = false;
        this.cgpApBarComponent.showUserBadge = false;
    }
}