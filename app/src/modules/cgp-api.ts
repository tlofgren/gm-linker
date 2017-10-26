// File: cgp-api.ts
// Author: Joseph M Diaz
// Date: 5/12/2017
// Desc: Api class that handles common code during ajax requests.
// Other Contributors:

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';

import { cgpAuthentication } from './cgp-authentication';

@Injectable()
export class CgpApiService {
    constructor(private http: Http) {}

    private beforeSend(opts) {
        // do common stuff here such as adding the cgp token to each request
        //

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let localToken = cgpAuthentication.getAuthToken();

        if(!localToken || localToken.length === 0) {
            window.location.replace('#/logged-out');
            return {
                opts: null,
                error: 'Auth token is not valid.'
            }
        }
        else {
            headers.append("Authorization", localToken);
        }

        return {
            opts: new RequestOptions({
                ...opts,
                headers: headers
            }),
            error: null
        }
    }

    private beforeError() {
        // do common stuff here
        //
    }

    private beforeComplete() {
        // do common stuff here
        //
    }

    get(url, opts) {
        let self = this;
        let beforeSendResult = self.beforeSend(opts);

        opts = beforeSendResult.opts;

        return (beforeSendResult.error)
            ? new Observable(observer => {
                self.beforeError();
                observer.error(beforeSendResult.error);
            })
            : new Observable(observer => {
                self.http.get(url, opts)
                    .subscribe(
                        value => observer.next(value),
                        error => {
                            self.beforeError();
                            observer.error(error);
                        },
                        () => {
                            self.beforeComplete();
                            observer.complete();
                        }
                    );
            });
    }

    post(url, body, opts) {
        let self = this;
        let beforeSendResult = self.beforeSend(opts);

        opts = beforeSendResult.opts;

        return (beforeSendResult.error)
            ? new Observable(observer => {
                self.beforeError();
                observer.error(beforeSendResult.error);
            })
            : new Observable(observer => {
                self.http.post(url, body, opts)
                    .subscribe(
                        value => observer.next(value),
                        error => {
                            self.beforeError();
                            observer.error(error);
                        },
                        () => {
                            self.beforeComplete();
                            observer.complete();
                        }
                    );
            });
    }

    put(url, body, opts) {
        let self = this;
        let beforeSendResult = self.beforeSend(opts);

        opts = beforeSendResult.opts;

        return (beforeSendResult.error)
            ? new Observable(observer => {
                self.beforeError();
                observer.error(beforeSendResult.error);
            })
            : new Observable(observer => {
                self.http.put(url, body, opts)
                    .subscribe(
                        value => observer.next(value),
                        error => {
                            self.beforeError();
                            observer.error(error);
                        },
                        () => {
                            self.beforeComplete();
                            observer.complete();
                        }
                    );
            });
    }

    delete(url, opts) {
        let self = this;
        let beforeSendResult = self.beforeSend(opts);

        opts = beforeSendResult.opts;

        return (beforeSendResult.error)
            ? new Observable(observer => {
                self.beforeError();
                observer.error(beforeSendResult.error);
            })
            : new Observable(observer => {
                self.http.delete(url, opts)
                    .subscribe(
                        value => observer.next(value),
                        error => {
                            self.beforeError();
                            observer.error(error);
                        },
                        () => {
                            self.beforeComplete();
                            observer.complete();
                        }
                    );
            });
    }
}