
import { Component } from '@angular/core';

import { config } from '../../config/config';

@Component({
    templateUrl: './project-profile.template.html'
})
export class ProjectProfileComponent {
    appName = config.appInfo.name;
}
