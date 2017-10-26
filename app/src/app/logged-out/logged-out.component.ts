// File: logged-out.component.ts
// Author: Joseph M Diaz
// Date: 4/24/2017
// Desc: Component for the logged out page.
// Other Contributors:

import { Component } from '@angular/core';

import { AppService } from '../app.service';
import { CgpAppBarService } from '../shared/cgp-app-bar/cgp-app-bar.service';
import { CgpBreadcrumbsService } from '../shared/cgp-breadcrumbs/cgp-breadcrumbs.service';
import { cgpAuthentication } from '../../modules/cgp-authentication';
import { CgpIdleService } from '../shared/cgp-idle/cgp-idle.service';

@Component({
    templateUrl: './logged-out.template.html'
})
export class LoggedOutComponent {
    constructor(
        private appService: AppService,
        private cgpAppBarService: CgpAppBarService,
        private cgpBreadcrumbsService: CgpBreadcrumbsService,
        private cgpIdleService: CgpIdleService
    ) {}

    ngOnInit() {
        this.appService.logout();
        this.cgpAppBarService.logout();
        this.cgpBreadcrumbsService.logout();
        this.cgpIdleService.clearTimers();
        cgpAuthentication.invalidateToken(null);
    }

    logBackIn() {
        window.location.replace(window.location.origin + window.location.pathname);
    }
}