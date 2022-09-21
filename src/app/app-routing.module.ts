import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesCreateComponent } from './issues/issues-create/issues-create.component';
import { IssuesEditComponent } from './issues/issues-edit/issues-edit.component';
import { IssuesListComponent } from './issues/issues-list/issues-list.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'issues-list',
    pathMatch: 'full'
  },
  {
    path: 'issues-list',
    component: IssuesListComponent,
  },
  {
    path: 'issues-create',
    component: IssuesCreateComponent,
  },
  {
    path: 'issues-edit/:id',
    component: IssuesEditComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
