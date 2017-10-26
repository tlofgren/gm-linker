import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { CgpSnackbarService } from '../../../../src/app/shared/cgp-snackbar/cgp-snackbar.service';
import { MdSnackBarModule } from '@angular/material';

describe("Cgp Snackbar Service", () => {

    let mockOpts = { 
        message: 'THIS IS A TEST SNACKBAR MESSAGE.',
        action: 'TEST DISMISS',
        onAction: () => {
            alert('TEST ACTION CLICKED');
        }
    }

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ MdSnackBarModule, BrowserAnimationsModule ],
            providers: [ CgpSnackbarService ]
        })        
    });

    describe('Show Snackbar', () => {
        it('should create a snackbar with mock opts.', 
            inject([CgpSnackbarService], (cgpSnackbarService) => {

                let testSnackBar = cgpSnackbarService.showSnackbar(mockOpts);
      
                expect(testSnackBar.containerInstance.animationState).toBe('visible');
                expect(testSnackBar.instance.action).toBe('TEST DISMISS');
                expect(testSnackBar.instance.message).toBe('THIS IS A TEST SNACKBAR MESSAGE.');
                expect(testSnackBar.instance.hasAction).toBe(true);
                expect(testSnackBar.instance.snackBarRef).toBeDefined();
                
                testSnackBar.dismiss();
            })
        )     
    })
});