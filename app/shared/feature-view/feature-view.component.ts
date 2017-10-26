import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PageContext } from '../../core/page-context.service';

@Component({
    selector: 'pfcm-feature-view',
    styleUrls: [ './feature-view.component.css' ],
    templateUrl: './feature-view.component.html'
})
export class FeatureViewComponent implements OnInit, OnDestroy {
    @Input() addFooterSpace: number = 0; // Default using full height - footer
    pageTitle: string = '';
    private pageTitleObservable: Subscription;

    constructor(private pageContext: PageContext) {
    }

    ngOnInit(): void {
        this.pageTitleObservable = this.pageContext.pageTitle.subscribe(next => {
            this.pageTitle = next;
        });
    }

    ngOnDestroy(): void {
        this.pageTitleObservable.unsubscribe();
    }
}
