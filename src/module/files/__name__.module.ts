import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { reducers, effects } from '@web/app/<%= path %>/<%= name %>/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@web/app/shared/shared.module';
import { <%= classify(name) %>RoutingModule } from '@web/app/<%= path %>/<%= name %>/<%= name %>-routing.module';

import * as fromContainers from '@web/app/<%= path %>/<%= name %>/containers';
import * as fromComponents from '@web/app/<%= path %>/<%= name %>/components';
import * as fromShared from '@web/app/<%= path %>/<%= name %>/shared';

@NgModule({
  imports: [
    SharedModule,
    <%= classify(name) %>RoutingModule,
    StoreModule.forFeature('<%= name %>', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
    ...fromShared.shared
  ],
  exports: [
    ...fromShared.shared
  ]
})
export class <%= classify(name) %>Module { }
