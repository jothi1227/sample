import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesListComponent } from './issues/issues-list/issues-list.component';
import { IssuesCreateComponent } from './issues/issues-create/issues-create.component';
import { IssuesEditComponent } from './issues/issues-edit/issues-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IssuesListComponent,
    IssuesCreateComponent,
    IssuesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
