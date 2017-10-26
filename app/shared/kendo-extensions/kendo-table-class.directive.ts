import { Directive, OnInit } from '@angular/core';

@Directive({
    selector: '[pfcmKendoTableClass]'
})
export class KendoTableClassDirective implements OnInit {
    class: string = 'bordered-table highlight-table';

    constructor() {
    }

    ngOnInit(): void {
    }
}
