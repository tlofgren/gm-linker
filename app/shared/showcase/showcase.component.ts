import { Component, Input, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'gm-showcase',
    styleUrls: [ './showcase.component.less' ],
    templateUrl: './showcase.component.html'
})
export class ShowcaseComponent implements OnInit {
    @Input() showBackButton: boolean = false;
    @Input() title: string;

    constructor() {
    }

    ngOnInit(): void {
    }
}
