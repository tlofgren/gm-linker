import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from './spinner/spinner.module';

import { FeatureViewComponent } from '../shared/feature-view/feature-view.component';
import { StretchedScrollableContainerDirective } from '../shared/stretched-scrollable-container.directive';
import { KendoExtensionsModule } from './kendo-extensions/kendo-extensions.module';

import { ShowcaseComponent } from 'app/shared/showcase/showcase.component';
import { BottomActionBarComponent } from './bottom-action-bar/bottom-action-bar.component';
import { SearchPipe } from './pipes/search.pipe';
import { ModalComponent } from './pop-up-modal/modal/modal.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DatePickerComponent } from 'app/shared/date-picker/date-picker.component';

@NgModule({
    declarations: [
        BottomActionBarComponent,
        FeatureViewComponent,
        ModalComponent,
        SearchPipe,
        StretchedScrollableContainerDirective,
        ShowcaseComponent,
        SpinnerComponent,
        DatePickerComponent
    ],
    exports: [
        BottomActionBarComponent,
        CommonModule,
        FeatureViewComponent,
        FormsModule,
        KendoExtensionsModule,
        ModalComponent,
        SearchPipe,
        StretchedScrollableContainerDirective,
        ShowcaseComponent,
        SpinnerComponent,
        DatePickerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        KendoExtensionsModule,
        RouterModule,
        SpinnerModule
    ]
})
export class SharedModule { }
