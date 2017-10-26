import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Button } from 'app/shared/pop-up-modal/button.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'gm-modal',
    styleUrls: ['./modal.component.less'],
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
    @Input() buttons: Button[];
    @Input() class: string = 'modal-md';
    @Input() message: string = '';
    @Input() title: string = '';
    @Input() visible: boolean = false;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
    }

    hideModal(): void {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
}
