// File: cgp-breadcrumbs.module.ts
// Author: Joseph M Diaz
// Date: 5/1/2017
// Desc: CGP Breadcrumbs module.
// Other Contributors:

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CgpBreadcrumbsService } from './cgp-breadcrumbs.service';
import { CgpBreadcrumbsComponent }   from './cgp-breadcrumbs.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CgpBreadcrumbsComponent
    ],
    declarations: [
        CgpBreadcrumbsComponent
    ],
    providers: [
        CgpBreadcrumbsService
    ],
    entryComponents: [
        CgpBreadcrumbsComponent
    ],
})
export class CgpBreadcrumbsModule { }