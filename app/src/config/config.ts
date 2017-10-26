// File: config.js
// Author: Joseph M Diaz
// Date: 4/27/2017
// Desc: Configuration items used throughout the application.
// Other Contributors:

import { baseConfig } from './config.base';
import { idleTimer } from './config.idleTimer';
import { navItems } from './config.navbar';
import { breadcrumbs } from './config.breadcrumbs';
import { appBarMenuItems } from "./config.appbarmenu";

export const config = {
    ...baseConfig,
    idleTimer: idleTimer,
    navItems: navItems,
    breadcrumbs: breadcrumbs,
    appBarMenuItems : appBarMenuItems
};