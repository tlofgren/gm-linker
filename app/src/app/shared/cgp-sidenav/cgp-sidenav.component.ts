// File: cgp-sidenav.component.ts
// Author: Joseph M Diaz
// Date: 5/10/2017
// Desc: Sidenav component. Items are loaded fromt he config file.
// Other Contributors:

import { Component } from '@angular/core';

import { config } from '../../../config/config';
import { CgpSidenavService } from './cgp-sidenav.service';

@Component({
    selector: 'cgp-sidenav',
    templateUrl: './cgp-sidenav.template.html'
})
export class CgpSidenavComponent {
    public items;

    constructor(public cgpSidenavService: CgpSidenavService) {
        cgpSidenavService.updatedItemsEvent.subscribe((updatedItems) => {
            this.items = updatedItems;
        });

        this.items = this.cgpSidenavService.getVisibleItems();
    }
}