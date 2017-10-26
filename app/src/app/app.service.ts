// File: app.service.ts
// Author: Joseph M Diaz
// Date: 5/8/2017
// Desc: Root module for the app.
// Other Contributors:

import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    appComponent;

    constructor() { }

    toggleSidenav() {
        this.appComponent.sidenavVisible = !this.appComponent.sidenavVisible;
    }

    logout() {
        this.appComponent.sidenavVisible = false;
    }
}
