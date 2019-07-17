import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentLazyComponent } from './parent-lazy/parent-lazy.component';
import { ChildLazyComponent } from './child-lazy/child-lazy.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes= [
  {
    path: 'load-me', component: ParentLazyComponent
  }
]



@NgModule({
  declarations: [ParentLazyComponent, ChildLazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
