import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import { <%= classify(name) %>ExistGuard } from './guards/<%= name %>-exist.guard';

export const routes: Routes = [
  {
    path: '', component: fromContainers.IndexPage<%= classify(name) %>Component,
    children: [
      { path: 'create', component: fromContainers.FormPage<%= classify(name) %>Component },
      { path: ':<%= name %>_id', component: fromContainers.FormPage<%= classify(name) %>Component, canActivate: [<%= classify(name) %>ExistGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class <%= classify(name) %>RoutingModule { }
