import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CommitHistory } from './commit-history.model';

@Injectable()
export class CommitHistoryService {
  private apiUrl = 'http://devtest.demo.ca.com:8020/api/assets/currentusersprojects/';

  private SAMPLE_JSON = {
    "gmId": "nzrv8b",
    "projects": [
      {
        "asmsNum": 234234,
        "projectFriendlyName": "PFCM",
        "ppmNum": 634343,
        "commitHistory": [
          {
            "latestCommitTimeStamp": 1509028498,
            "filesCommitted": [
              "polyfills.ts",
              "main.ts",
              "./app/app-routing.module.ts",
              "./app/app.component.html",
              "./app/app.component.css",
              "tsconfig.app.json"
            ],
            "scm": "TFS"
          }
        ],
        "users": [
          "nzrv8b",
          "nzj32b"
        ]
      },
      {
        "asmsNum": 234234,
        "projectFriendlyName": "PFCM",
        "ppmNum": 634343,
        "commitHistory": [
          {
            "latestCommitTimeStamp": 1509029108,
            "filesCommitted": [
              "polyfills.ts",
              "main.ts",
              "./app/app-routing.module.ts",
              "./app/app.component.html",
              "./app/app.component.css",
              "tsconfig.app.json"
            ],
            "scm": "SVN",
            "asmsNum": 2765333,
            "ppmNum": 3453444,
            "projectId": "CSMS_5311"
          }
        ],
        "users": [
          "nzrv8b",
          "nzj32b"
        ]
      }
    ]
  };

  public currUser;

  /**
   * Taken from
   * https://angular.io/docs/ts/latest/guide/server-communication.html#!#fetch-data
   * @param error Angular's version of the HTTP Response object
   */
  private static handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    /*if (error instanceof Response) {*/
    if (error.status === 405) {
      errMsg = "There was a problem uploading your file. Check to make sure your file is in a valid format and it is "
        + "one of the accepted types.";
    } else {
      const body: any | string = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `Error Status: ${error.status} - ${error.statusText || ''} ${err}`;
    }
    /*} else {
      // errMsg = error.message ? error.message : error.toString();
    }*/
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(private http: Http) { }

  getCommitHistory(userId: string): Observable<CommitHistory> {
    this.currUser = userId;
    // for sample data
    return Observable.of(this.SAMPLE_JSON);

    // for live service
    // return this.http.get(this.apiUrl + '/' + userId)
    //   .map(res => <CommitHistory>res.json())
    //   .catch(CommitHistoryService.handleError);
  }
}