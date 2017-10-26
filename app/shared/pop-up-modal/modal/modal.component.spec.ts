import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Button } from 'app/shared/pop-up-modal/button.model';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ModalComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have passed in class in modal-dialog element', () => {
        component.visible = true;
        component.class = 'my-class';
        fixture.detectChanges();

        const modalDialogElement: DebugElement = fixture.debugElement.query(By.css('.modal-dialog'));

        expect(modalDialogElement.properties.className).toContain('my-class');
    });

    it('should display modal title in title element', () => {
        component.visible = true;
        component.title = 'this is the passed in title';
        fixture.detectChanges();

        const titleElement: DebugElement = fixture.debugElement.query(By.css('#title'));

        expect(titleElement.nativeElement.textContent).toContain('this is the passed in title');
    });

    it('should display passed in message inside the modal body', () => {
        component.visible = true;
        component.message = 'this is a passed in message';
        fixture.detectChanges();

        const messageElement: DebugElement = fixture.debugElement.query(By.css('.modal-body .modal-body-section'));

        expect(messageElement.nativeElement.textContent).toContain('this is a passed in message');
    });

    it('should close when x is clicked', () => {
        component.visible = true;
        fixture.detectChanges();

        const xElement: DebugElement = fixture.debugElement.query(By.css('span.glyphicon-remove'));
        let visibility: boolean;

        component.visibleChange.subscribe((visible: boolean) => visibility = visible);

        xElement.triggerEventHandler('click', null);
        expect(visibility).toBe(false);
        expect(component.visible).toBe(false);
    });

    describe('buttons', () => {
        let modalButtons: Button[];
        let testBoolean: boolean = false;
        let firstButtonElement: DebugElement;
        let secondButtonElement: DebugElement;

        beforeEach(() => {
            modalButtons = [
                {
                    className: 'btn btn-primary',
                    clickMethod: () => {
                        testBoolean = true;
                    },
                    isDisabled: () => {
                        return true
                    },
                    text: 'Button 1'
                },
                {
                    className: 'btn btn-secondary',
                    clickMethod: () => {
                        testBoolean = false;
                    },
                    isDisabled: () => {
                        return false
                    },
                    text: 'Button 2'
                }
            ];

            component.buttons = modalButtons;
            component.visible = true;
            fixture.detectChanges();

            firstButtonElement = fixture.debugElement.query(By.css('button.btn.btn-primary'));
            secondButtonElement = fixture.debugElement.query(By.css('button.btn.btn-secondary'));
        });

        it('should contain correct text', () => {
            expect(firstButtonElement.nativeElement.textContent).toContain('Button 1');
            expect(secondButtonElement.nativeElement.textContent).toContain('Button 2');
        });

        it('should be disabled when passed in button isDisabled function evaluates to true', () => {
            const firstDisabledProperty: boolean = firstButtonElement.properties.disabled;
            expect(firstDisabledProperty).toBe(true);

            const secondDisabledProperty: boolean = secondButtonElement.properties.disabled;
            expect(secondDisabledProperty).toBe(false);
        });

        it('should perform passed in clickMethod when clicked', () => {
            firstButtonElement.triggerEventHandler('click', null);
            expect(testBoolean).toBe(true);

            secondButtonElement.triggerEventHandler('click', null);
            expect(testBoolean).toBe(false);
        });
    });
});
