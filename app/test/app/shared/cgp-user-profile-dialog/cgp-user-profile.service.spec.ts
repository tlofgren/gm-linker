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
import { CgpUserProfileDialogComponent } from '../../../../src/app/shared/cgp-user-profile-dialog/cgp-user-profile-dialog.component';
import { CgpUserProfileDialogService } from '../../../../src/app/shared/cgp-user-profile-dialog/cgp-user-profile-dialog.service';
import { MdDialogModule, MdDialogRef, MdIconModule } from '@angular/material';

describe("Cgp User Profile Dialog Service", () => {

    let comp : CgpUserProfileDialogComponent;
    let fixture : ComponentFixture<CgpUserProfileDialogComponent>;

    let cgpUserProfileDialogService : CgpUserProfileDialogService;

    let mockDialogRef : MdDialogRef<CgpUserProfileDialogComponent>;

    let mockDefaults = {
        title : 'TEST USER PROFILE DIALOG',
        closeLabel : 'CLOSE',
    }

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ DialogTestModule ],
            providers: [ 
                    { provide : MdDialogRef, useValue: mockDialogRef }
            ],
            schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
        })

        fixture = TestBed.createComponent(CgpUserProfileDialogComponent);
        
        cgpUserProfileDialogService = fixture.debugElement.injector.get(CgpUserProfileDialogService);
    });

    describe("ShowUserProfileDialog function", () => {
        it('should create a user profile dialog object with mock data.', () => {

            mockDialogRef = cgpUserProfileDialogService.showUserProfileDialog(mockDefaults);
            
            let testDialog = mockDialogRef.componentInstance;

            mockDialogRef.close();
            fixture.detectChanges();

            expect(testDialog.title).toEqual('TEST USER PROFILE DIALOG');
            expect(testDialog.closeLabel).toEqual('CLOSE');

        }) 
    });

    describe("ShowUserProfileDialog function", () => {
        it('should throw an error when attempting to open two dialogs.', () => {

            mockDialogRef = cgpUserProfileDialogService.showUserProfileDialog(mockDefaults);
            expect(function() { cgpUserProfileDialogService.showUserProfileDialog(mockDefaults); }).toThrow('You can only have one User Profile Dialog open at a time.');
            mockDialogRef.close();
            fixture.detectChanges();
        }) 
    });
});

@NgModule({
    imports: [ MdDialogModule, BrowserModule, BrowserAnimationsModule ],
    declarations: [ CgpUserProfileDialogComponent ],
    providers: [ CgpUserProfileDialogService ],
    entryComponents: [ CgpUserProfileDialogComponent ],
    exports: [ CgpUserProfileDialogComponent ]
})
class DialogTestModule {};