import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Spinner } from './spinner.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'gm-spinner',
    styleUrls: [ './spinner.component.less' ],
    templateUrl: './spinner.component.html',
})
export class SpinnerComponent implements OnInit {
    private show: boolean = false;

    constructor(private spinner: Spinner) {}

    ngOnInit(): void {
        this.spinner.showSpinner.subscribe(value => {
            this.show = value;
        })
    }
}
