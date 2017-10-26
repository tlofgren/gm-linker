// // File: cgp-api-spec.ts
// // Author: James Seebach
// // Date: 6/19/2017
// // Desc: CGP API test file.
// // Other Contributors:

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { CgpConfirmationDialogComponent } from '../../../../src/app/shared/cgp-confirmation-dialog/cgp-confirmation-dialog.component';
import { CgpConfirmationDialogService } from '../../../../src/app/shared/cgp-confirmation-dialog/cgp-confirmation-dialog.service';
import { MdDialogModule, MdDialogRef } from '@angular/material';

describe("Cgp Confirmation Dialog Service", () => {

    let comp : CgpConfirmationDialogComponent;
    let fixture : ComponentFixture<CgpConfirmationDialogComponent>;

    let cgpConfirmationDialogService : CgpConfirmationDialogService;

    let mockDialogRef : MdDialogRef<CgpConfirmationDialogComponent>;

    let mockDefaults = {
        title: 'TEST CONFIRMATION',
        message: 'CONFIRMATION',
        alert: 'CONFIRMATION ALERT',
        yesLabel: 'Yes',
        noLabel: 'No',
        onYesClick: null,
        onNoClick: null,
        onClosed: null
    }

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ DialogTestModule ],
            providers: [ 
                    { provide : MdDialogRef, useValue: mockDialogRef }
            ],
            schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
        })

        fixture = TestBed.createComponent(CgpConfirmationDialogComponent);
        
        cgpConfirmationDialogService = fixture.debugElement.injector.get(CgpConfirmationDialogService);
    });

    describe("ShowConfirmationDialog function", () => {
        it('should create a confirmation dialog object with mock data.', () => {

            mockDialogRef = cgpConfirmationDialogService.showConfirmationDialog(mockDefaults);
    
            let testDialog = mockDialogRef.componentInstance;
                  
            mockDialogRef.close();
            fixture.detectChanges();

            expect(testDialog.title).toEqual('TEST CONFIRMATION');
            expect(testDialog.message).toEqual('CONFIRMATION');
            expect(testDialog.alert).toEqual('CONFIRMATION ALERT');
            expect(testDialog.onYesClick).toBeNull();
            expect(testDialog.onNoClick).toBeNull();
            expect(testDialog.yesLabel).toEqual('Yes');
            expect(testDialog.noLabel).toEqual('No');
        }) 
    });

    describe("ShowConfirmationDialog function", () => {
        it('should throw an error when attempting to open two dialogs.', () => {

            mockDialogRef = cgpConfirmationDialogService.showConfirmationDialog(mockDefaults);
            expect(function() { cgpConfirmationDialogService.showConfirmationDialog(mockDefaults); }).toThrow('You can only have one CGP Confirmation Dialog open at a time.');
            mockDialogRef.close();
            fixture.detectChanges();
        }) 
    });
});

@NgModule({
    imports: [ MdDialogModule, BrowserModule, BrowserAnimationsModule ],
    declarations: [ CgpConfirmationDialogComponent ],
    providers: [ CgpConfirmationDialogService ],
    entryComponents: [ CgpConfirmationDialogComponent ],
    exports: [ CgpConfirmationDialogComponent ]
})
class DialogTestModule {};