// File: home.component.ts
// Author: Joseph M Diaz
// Date: 4/24/2017
// Desc: Component for the home page.
// Other Contributors: Brandon Shreve

import { Component } from '@angular/core';

import { config } from '../../config/config';
import { cgpAuthentication } from '../../modules/cgp-authentication';

@Component({
    templateUrl: './home.template.html'
})
export class HomeComponent {
    appName = config.appInfo.name;
    userId = cgpAuthentication.getUserInfo().uid;
}