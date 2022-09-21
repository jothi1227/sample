import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {



  issue:any;
  constructor(private issueService : IssueService) { }

  ngOnInit(): void {

    this.issue = this.issueService.getIssues(); 
  }

  deleteIssue(id:any ) {
    for(let i = 0; i < this.issue.length; i++) {
      if(this.issue[i].id == id) {
          this.issue.splice(i, 1);
      }
    }

    this.issueService.deleteIssue(id);
  }

}
