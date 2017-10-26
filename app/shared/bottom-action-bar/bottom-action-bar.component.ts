import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'pfcm-bottom-action-bar',
    styleUrls: [ './bottom-action-bar.component.css' ],
    templateUrl: './bottom-action-bar.component.html'
})
export class BottomActionBarComponent implements OnInit {
    @Input() height: number = 50; // Default height

    constructor() {
    }

    ngOnInit(): void {
    }
}
