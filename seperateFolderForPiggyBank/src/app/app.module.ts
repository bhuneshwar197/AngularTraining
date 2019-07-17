import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { FilterprojectPipe } from './filterproject.pipe';
import { NewProjectComponent } from './new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    FilterprojectPipe,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
