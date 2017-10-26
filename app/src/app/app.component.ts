// File: app.component.ts
// Author: Joseph M Diaz
// Date: 4/20/2017
// Desc: Root component for the app.
// Other Contributors: Brandon Shreve

import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { config } from '../config/config';
import { AppService } from './app.service';
// import { CgpIdleService } from './shared/cgp-idle/cgp-idle.service';
import { CgpBreadcrumbsService } from './shared/cgp-breadcrumbs/cgp-breadcrumbs.service';

@Component({
    selector: 'cgp-app',
    templateUrl: './app.template.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    @ViewChild('cgpContentContainer') private cgpContentContainer: ElementRef;
    public sidenavVisible = false;
    //public appName = 'GM Linker';
    constructor(
        private router: Router,
        private appService: AppService,
        // private cgpIdleService: CgpIdleService
    ) {
        this.appService.appComponent = this;
        // this.cgpIdleService.startTimers();
    }

    ngOnInit() {
        let self = this;

        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event) => {
                let url = (event as any).url || '';
                let urlArray = url.split('/');
                let baseUrl = urlArray[1];
                let breadcrumbs = config.breadcrumbs[baseUrl];
                let sidenavContentContainer = self.cgpContentContainer.nativeElement.querySelector('.mat-sidenav-content');

                sidenavContentContainer.scrollTop = 0;
                sidenavContentContainer.scrollLeft = 0;
            });
    }

    @HostListener('window:mousemove')
    onMouseMove() {
        // this.cgpIdleService.setIsActive();
    }

    @HostListener('window:mousedown')
    onMouseDown() {
        // this.cgpIdleService.setIsActive();
    }

    @HostListener('window:keydown')
    onKeyDown() {
        // this.cgpIdleService.setIsActive();
    }
}
