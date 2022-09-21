import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IssueService } from '../issue.service';



@Component({
  selector: 'app-issues-edit',
  templateUrl: './issues-edit.component.html',
  styleUrls: ['./issues-edit.component.css']
})
export class IssuesEditComponent implements OnInit {

  issue:any;
  id:any;
 
  constructor(private _ActivatedRoute:ActivatedRoute, private issueService:IssueService, private router:Router) { }

  @ViewChild("f") form :any;


  ngOnInit(): void {

    this.id = this._ActivatedRoute.snapshot.params['id'];
    let iss = this.issueService.getIssues();
    this.issue = iss.find((p: { id: any; }) => p.id==this.id);
    console.log(this.issue);
  }

  onSubmit(){
    if(this.form.value) {
      console.log( this.form.value);
      this.issueService.updateIssue(this.issue,this.form.value);
      this.router.navigate(['issues-list']);
    }
  }
}
