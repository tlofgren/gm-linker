import { AfterViewChecked, Directive, ElementRef, HostListener, Input, OnInit, Renderer } from '@angular/core';

// TODO: figure out how to inject the gradient instead of having it on the feature view template.
@Directive({
    selector: '[pfcmStretchedScrollableContainer]'
})
export class StretchedScrollableContainerDirective implements AfterViewChecked, OnInit {
    @Input() addFooterSpace: number;

    /* tslint:disable-next-line:no-unused-variable */
    private _gradientMarkup: string = '<div class="gradient-bottom" ng-show="isGradientShowing" style="opacity: {{opacity}};"></div>';
    disableOpaqueFooter: boolean = false;
    footerSize: number = 50;
    forcedDisabledFooter: boolean = false;
    headerSize: number = 0;
    isGradientShowing: boolean = true;

    constructor(private element: ElementRef,
        private render: Renderer) {
    }

    adjustContainer(): void {
        const scrollHeight: number = this.calculateHeight(window);
        this.changeHeight(scrollHeight);
        // this.changeGradient();
    }

    changeHeight(height: number): void {
        this.render.setElementStyle(this.element.nativeElement, 'height', height + 'px');
    }

    calculateHeight(window: Window): number {
        const el: any = this.element.nativeElement;
        const header: number = this.headerSize || el.offsetParent.offsetTop + el.offsetTop;
        const footer: number = this.footerSize + this.addFooterSpace;

        const scrollHeight: number = window.innerHeight - footer - header;
        return scrollHeight;
    }

    changeGradient(): void {
        const el: any = this.element.nativeElement;
        // Threshold is tuned to size of the footer, setting it higher will make the gradient turn off higher in the scroll
        const threshold: number = 100;
        const opacity: number = ((el.scrollHeight - el.offsetHeight) - el.scrollTop) / threshold;

        this.isGradientShowing = opacity <= 0 ? false : true;
        this.render.setElementStyle(this.element.nativeElement, 'opacity', opacity.toString());
    }

    changeFooter(): void {
        if (this.disableOpaqueFooter) {
            this.isGradientShowing = false;
            this.forcedDisabledFooter = true;
        }
    }

    @HostListener('window:resize', [ '$event' ])
    onResize(event: Event): void {
        this.adjustContainer();
    }

    ngAfterViewChecked(): void {
        this.adjustContainer();
    }

    ngOnInit(): void {
    }
}
