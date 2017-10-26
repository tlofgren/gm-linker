import { Component, Input, OnInit } from '@angular/core';
import { cgpAuthentication } from '../../modules/cgp-authentication';
import { CommitHistory, Project } from '../commit-history.model';
import { CommitHistoryService } from '../commit-history.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CgpBreadcrumbsService } from '../shared/cgp-breadcrumbs/cgp-breadcrumbs.service';

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

  constructor(private commitHistService: CommitHistoryService, private route: ActivatedRoute, private breadcrumbs: CgpBreadcrumbsService) { }

  ngOnInit() {
    const breadcrumbs = [
      {
        iconClass: 'fa fa-lg fa-home',
        link: {
          enabled: true,
          url: "/home"
        }
      },
      {
        name: 'First Breadcrumb',
        link: { enabled: true, url: "/breadcrumbs" }
      },
      {
        name: 'Second Breadcrumb',
        link: { enabled: true, url: "/breadcrumbs" }
      },
      {
        name: 'Third Breadcrumb',
        link: { enabled: false }
      }
    ];

    this.breadcrumbs.updateBreadcrumbs(breadcrumbs);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.user = params.get('id');
      this.commitHistService.getCommitHistory(this.user).subscribe(next => {
        this.currUserCommitHist = next;
      });
    });
  }

}
