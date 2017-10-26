// File: cgp-app-bar.component.ts
// Author: Joseph M Diaz
// Date: 4/27/2017
// Desc: CGP App Bar that has the company logo, navigation toggle, and user menu toggle.
// Other Contributors:

import { Component } from '@angular/core';

import { baseConfig } from '../../../config/config.base';
import { AppService } from '../../app.service';
import { CgpAppBarService } from './cgp-app-bar.service';

@Component({
    selector: 'cgp-app-bar',
    templateUrl: './cgp-app-bar.template.html'
})
export class CgpAppBarComponent {
    appName = baseConfig.appInfo.name;
    showNavToggle = true;
    showUserBadge = true;

    constructor(private appService: AppService, private cgpAppBarService: CgpAppBarService) {
        cgpAppBarService.cgpApBarComponent = this;
    }

    onNavToggleClick() {
        this.appService.toggleSidenav();
    }
}
