// // File: cgp-api-spec.ts
// // Author: James Seebach
// // Date: 6/19/2017
// // Desc: CGP API test file.
// // Other Contributors:

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { CgpAlertDialogComponent } from '../../../../src/app/shared/cgp-alert-dialog/cgp-alert-dialog.component';
import { CgpAlertDialogService } from '../../../../src/app/shared/cgp-alert-dialog/cgp-alert-dialog.service';
import { MdDialogModule, MdDialogRef } from '@angular/material';

describe("Cgp Alert Dialog Service", () => {

    let comp : CgpAlertDialogComponent;
    let fixture : ComponentFixture<CgpAlertDialogComponent>;

    let cgpAlertDialogService : CgpAlertDialogService;

    let mockDialogRef : MdDialogRef<CgpAlertDialogComponent>;

    let mockDefaults = {
        title : 'TEST ALERT DIALOG',
        message : 'TEST MESSAGE',
        alert : 'WARNING',
        closeLabel : 'CLOSE'
    }

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ DialogTestModule ],
            providers: [ 
                    { provide : MdDialogRef, useValue: mockDialogRef }
            ],
            schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
        })

        fixture = TestBed.createComponent(CgpAlertDialogComponent);
        
        cgpAlertDialogService = fixture.debugElement.injector.get(CgpAlertDialogService);
    });

    describe("ShowAlertDialog function", () => {
        it('should create an alter dialog object with mock data.', () => {

            mockDialogRef = cgpAlertDialogService.showAlertDialog(mockDefaults);
            
            let testDialog = mockDialogRef.componentInstance;

            mockDialogRef.close();
            fixture.detectChanges();

            expect(testDialog.title).toEqual('TEST ALERT DIALOG');
            expect(testDialog.message).toEqual('TEST MESSAGE');
            expect(testDialog.alert).toEqual('WARNING');
            expect(testDialog.closeLabel).toEqual('CLOSE');

        }) 
    });
});

@NgModule({
    imports: [ MdDialogModule, BrowserModule, BrowserAnimationsModule ],
    declarations: [ CgpAlertDialogComponent ],
    providers: [ CgpAlertDialogService ],
    entryComponents: [ CgpAlertDialogComponent ],
    exports: [ CgpAlertDialogComponent ]
})
class DialogTestModule {};