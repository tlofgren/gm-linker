import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { Spinner } from './spinner.service';

@NgModule({
    declarations: [ ],
    imports: [
        CommonModule
    ],
    providers: [
        Spinner
    ]
})

export class SpinnerModule { }
