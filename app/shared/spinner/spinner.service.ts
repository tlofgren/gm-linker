import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class Spinner {

    public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    constructor() {
    }

    public show(): void {
        this.showSpinner.next(true);
    }

    public hide(): void {
        this.showSpinner.next(false);
    }
}
