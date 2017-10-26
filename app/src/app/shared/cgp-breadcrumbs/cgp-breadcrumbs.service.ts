// File: cgp-breadcrumbs.service.ts
// Author: Joseph M Diaz
// Date: 5/1/2017
// Desc: CGP Breadcrumbs module.
// Other Contributors:

import { Injectable } from '@angular/core';

@Injectable()
export class CgpBreadcrumbsService {
    breadcrumbsComponent;

    getBreadcrumbs() {
        return this.breadcrumbsComponent.breadcrumbs;
    }

    updateBreadcrumbs(breadcrumbs) {
        this.breadcrumbsComponent.breadcrumbs = breadcrumbs;
    }

    logout() {
        this.breadcrumbsComponent.showBreadcrumbs = false;
    }
}