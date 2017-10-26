
import { Component, Input, OnInit } from '@angular/core';

import { config } from '../../config/config';
import { CommitHistory, Project } from '../commit-history.model';
import { CommitHistoryService } from '../commit-history.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: './project-profile.template.html'
})
export class ProjectProfileComponent implements OnInit {
    user: string;
    commits: CommitHistory;
    projectId: number;

    constructor(private commitHistSvc: CommitHistoryService, private route: ActivatedRoute) {
    }

    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.user = this.commitHistSvc.currUser;
        this.projectId = +params.get('id');
        this.commitHistSvc.getCommitHistory(this.user).subscribe(next => {
          this.commits = next;
        });
      });
    }
}
