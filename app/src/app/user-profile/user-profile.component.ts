import { Component, Input, OnInit } from '@angular/core';
import { cgpAuthentication } from '../../modules/cgp-authentication';
import { CommitHistory, Project } from '../commit-history.model';
import { CommitHistoryService } from '../commit-history.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  currUserCommitHist: CommitHistory;
  get userProjects() {
    return this.currUserCommitHist.projects;
  }

  // need to change to input user
  private _user = "nzrv8b";
  @Input() set user(value: string) {
    this._user = value;
  }
  get user() {
    return this._user;
  }

  constructor(private commitHistService: CommitHistoryService) { }

  ngOnInit() {
    this.commitHistService.getCommitHistory(this.user).subscribe(next => {
      this.currUserCommitHist = next;
    });
  }

}
