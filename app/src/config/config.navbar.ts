// File: config.navbar.js
// Author: Joseph M Diaz
// Date: 4/27/2017
// Desc: Configuration used by cgp-nav-bar.
// Other Contributors:

import { baseConfig } from './config.base';

// Nav Bar Items
//
export const navItems = [
    { title: "Home", iconClass:"fa fa-home", url: baseConfig.baseUrl + '#/home' }
];

// Nav Bar Actions: Go in /src/app/shared/cgp-sidenav.service.ts