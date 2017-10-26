// File: cgp-app-bar-menu-component.ts
// Author: James L Seebach
// Date: 5/12/2017
// Desc: CGP App Bar Menu component.
// Other Contributors:

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CgpUserProfileDialogService } from '../../cgp-user-profile-dialog/cgp-user-profile-dialog.service';
import { MdMenuTrigger } from '@angular/material';

import { cgpAuthentication } from '../../../../modules/cgp-authentication';
import { config } from "../../../../config/config";

@Component({
    selector: 'cgp-app-bar-menu',
    templateUrl: './cgp-app-bar-menu.template.html'
})
export class CgpAppBarMenuComponent implements OnInit {

    @ViewChild(MdMenuTrigger) trigger : MdMenuTrigger;
    @Input() disableRipple;

    username;
    menuIcon;
    menuItems;

    constructor(private cgpUserProfileDialogService : CgpUserProfileDialogService) {}

    ngOnInit() {
        this.bindEvents();
        this.menuIcon = "fa fa-user";
        this.menuItems = config.appBarMenuItems;
        this.username = cgpAuthentication.getUserInfo().displayName;
    }

    menuActions(action) {
        let self = this;

        switch(action) {
            case "openProfileDialog":
                self.onShowUserProfileClick();
                break;
            case "logOut":
                window.location.href = "#/logged-out";
                break;
            default:
                //Remove default at production if desired
                alert("No matching function found");
        }
    }

    onShowUserProfileClick() {
        let self = this;

        self.cgpUserProfileDialogService.showUserProfileDialog({
            title: "User Profile",
            closeLabel: "Close"
        });
    }

    bindEvents() {
        let self = this;

        self.trigger.onMenuOpen.subscribe( () => {
            //Function calls or custom events to trigger on menu open go here
        });
        self.trigger.onMenuClose.subscribe( () => {
            //Function calls or custom events to trigger on menu close go here
            this.trigger.destroyMenu();
        });
    }
}
