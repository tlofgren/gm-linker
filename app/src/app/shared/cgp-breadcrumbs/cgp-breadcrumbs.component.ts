// File: cgp-breadcrumbs.component.ts
// Author: Joseph M Diaz
// Date: 5/1/2017
// Desc: CGP Breadcrumbs module.
// Other Contributors:

import { Component, OnDestroy } from '@angular/core';

import { CgpBreadcrumbsService } from './cgp-breadcrumbs.service';

@Component({
    selector: 'cgp-breadcrumbs',
    templateUrl: './cgp-breadcrumbs.template.html'
})
export class CgpBreadcrumbsComponent {
    breadcrumbs = [];
    showBreadcrumbs = true;

    constructor(private cgpBreadcrumbsService: CgpBreadcrumbsService) {
        this.cgpBreadcrumbsService.breadcrumbsComponent = this;
    }
}