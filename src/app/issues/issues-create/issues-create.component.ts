import { Component, OnInit, ViewChild } from '@angular/core';
import { IssueService } from '../issue.service';
import { Router } from '@angular/router';
import {v4 as uuid} from 'uuid';


@Component({
  selector: 'app-issues-create',
  templateUrl: './issues-create.component.html',
  styleUrls: ['./issues-create.component.css']
})
export class IssuesCreateComponent implements OnInit {

  issue:any;
  title:any;
  description:any;
  text:any;
  oldText:any;
  appState= 'default';


  constructor(private issueService:IssueService, private router:Router) { }


  @ViewChild("f") form:any;

  ngOnInit(): void {
  
    this.issue =this.issueService.getIssues();
  }

  onSubmit() {
    if (this.form.value) {
    let newIssue = {
      id:uuid(),
     
      title: this.form.value.title,
      description: this.form.value.description,
      
    }
    this.issue.push(newIssue);
    this.issueService.addIssues(newIssue);
    this.router.navigate(['issues-list']);
    }
  }


}
