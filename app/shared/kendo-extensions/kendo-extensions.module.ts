import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KendoTableClassDirective } from './kendo-table-class.directive';

@NgModule({
    declarations: [
        KendoTableClassDirective
    ],
    imports: [
        CommonModule
    ]
})
export class KendoExtensionsModule { }
