// File: component-example-spec.ts
// Author: James Seebach
// Date: 6/14/2017
// Desc: Home component test example.
// Other Contributors:

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from '../../../src/app/home/home.component';

describe('Home Component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({ 
            declarations: [ HomeComponent ]
        });
    });

    describe('Home Component', () => {
        it ('should be created', () => {
            let fixture = TestBed.createComponent(HomeComponent);
            expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
        })
    });
});