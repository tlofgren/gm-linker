import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CgpBreadcrumbsComponent } from '../../../../src/app/shared/cgp-breadcrumbs/cgp-breadcrumbs.component';
import { CgpBreadcrumbsService } from '../../../../src/app/shared/cgp-breadcrumbs/cgp-breadcrumbs.service';

describe('CGP Breadcumbs', () => {

    let comp : CgpBreadcrumbsComponent;
    let fixture : ComponentFixture<CgpBreadcrumbsComponent>;

    let cgpBreadcrumbsService : CgpBreadcrumbsService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [ CgpBreadcrumbsComponent ],
            providers: [ CgpBreadcrumbsService ]
        })

        fixture = TestBed.createComponent(CgpBreadcrumbsComponent);
        comp = fixture.componentInstance;

        cgpBreadcrumbsService = fixture.debugElement.injector.get(CgpBreadcrumbsService);
    })

    describe('Get Breadcrumbs', () => {
        it('should retrun an empty array', () => {

            expect(cgpBreadcrumbsService.getBreadcrumbs()).toEqual([]);

        })       
        
        it('should retrun a breadcrumb after updating breadcrumbs', () => {

            fixture.detectChanges();
            cgpBreadcrumbsService.updateBreadcrumbs(["testBreandCrumb"]);
            expect(cgpBreadcrumbsService.getBreadcrumbs()).toEqual(["testBreandCrumb"]);
            fixture.detectChanges();

        })
    })

    describe('Update Breadcrumbs', () => {
        it('should add a breadcrumb entry to the breadcrumb array', () => {

            fixture.detectChanges();
            cgpBreadcrumbsService.updateBreadcrumbs(["testBreandCrumb"]);
            expect(cgpBreadcrumbsService.getBreadcrumbs()).toEqual(["testBreandCrumb"]);
            fixture.detectChanges();

        })
    })

    describe('Logout', () => {
        it('sholuld empty the breadcrumb array', () => {

            fixture.detectChanges();
            cgpBreadcrumbsService.logout();
            expect(cgpBreadcrumbsService.getBreadcrumbs()).toEqual([]);
        })
    })
})