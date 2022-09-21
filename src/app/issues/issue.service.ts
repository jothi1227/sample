import { Injectable } from '@angular/core';
import { Init } from './issue_init';

@Injectable({
  providedIn: 'root'
})
export class IssueService extends Init {

  constructor() {
    super();
    console.log("Issue Reports System Works");
    this.load();
   }

   getIssues(){
    let issue =  JSON.parse(localStorage.getItem('issues')||'{}');
    return issue;
   }

   addIssues(newIssue:any) {
    let issue = JSON.parse(localStorage.getItem('issues')||'{}');
    issue.push(newIssue);
    localStorage.setItem('issues', JSON.stringify(issue));
    }

    deleteIssue(id:any) {
      let issue = JSON.parse(localStorage.getItem('issues')||'{}');
      for(let i = 0; i <issue.length; i++) {
       if(issue[i].id == id) {
         issue.splice(i, 1);
       }
    }
       localStorage.setItem('issues', JSON.stringify(issue));
    }

    updateIssue(oldIssue:any, newIssue:any)
    {  let issue = JSON.parse(localStorage.getItem('issues')||'{}');

     for(let i = 0; i <issue.length; i++) {
      if(issue[i].id == oldIssue.id) {
        issue[i] = newIssue;
      }
   }
      localStorage.setItem('issues', JSON.stringify(issue));
   }
 


}
