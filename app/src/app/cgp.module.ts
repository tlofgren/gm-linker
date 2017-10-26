// File: app.module.ts
// Author: Joseph M Diaz
// Date: 6/2/2017
// Desc: CGP module
// Other Contributors:

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { CgpApiService } from '../modules/cgp-api';
import { CgpIdleService } from './shared/cgp-idle/cgp-idle.service';
import { CgpAppBarModule } from './shared/cgp-app-bar/cgp-app-bar.module';
import { CgpSidenavComponent } from './shared/cgp-sidenav/cgp-sidenav.component';
import { CgpFooterComponent } from './shared/cgp-footer/cgp-footer.component';
import { CgpAlertDialogModule } from './shared/cgp-alert-dialog/cgp-alert-dialog.module';
import { CgpConfirmationDialogModule } from './shared/cgp-confirmation-dialog/cgp-confirmation-dialog.module';
import { CgpBreadcrumbsModule } from './shared/cgp-breadcrumbs/cgp-breadcrumbs.module';
import { CgpSnackbarModule } from './shared/cgp-snackbar/cgp-snackbar.module';
import { CgpIdleModule } from './shared/cgp-idle/cgp-idle.module';
import { CgpSidenavService } from './shared/cgp-sidenav/cgp-sidenav.service';

@NgModule({
    imports: [
        HttpModule,
        LayoutModule,
        CgpAlertDialogModule,
        CgpConfirmationDialogModule,
        CgpBreadcrumbsModule,
        CgpSnackbarModule,
        CgpAppBarModule,
        CgpIdleModule
    ],
    declarations: [
        CgpSidenavComponent,
        CgpFooterComponent,
    ],
    providers: [
        CgpApiService,
        CgpSidenavService
    ],
    exports: [
        CgpAlertDialogModule,
        CgpConfirmationDialogModule,
        CgpBreadcrumbsModule,
        CgpSnackbarModule,
        CgpAppBarModule,
        CgpSidenavComponent,
        CgpFooterComponent
    ]
})
export class CgpModule { }