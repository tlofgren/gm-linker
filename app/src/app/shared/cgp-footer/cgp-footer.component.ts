// File: cgp-footer.component.ts
// Author: Joseph M Diaz
// Date: 4/27/2017
// Desc: CGP Footer that displays Company, AppName, and Version.
// Other Contributors:

import { Component } from '@angular/core';

import { config } from '../../../config/config';

@Component({
    selector: 'cgp-footer',
    templateUrl: './cgp-footer.template.html'
})
export class CgpFooterComponent {
    company = config.appInfo.company;
    appName = config.appInfo.name;
    appVersion = config.appInfo.version;
}