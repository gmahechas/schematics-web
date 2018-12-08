import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { reducers, effects } from '@web/app/<%= path %>/<%= dasherize(name) %>/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@web/app/shared/shared.module';
import { <%= classify(name) %>RoutingModule } from '@web/app/<%= path %>/<%= dasherize(name) %>/<%= dasherize(name) %>-routing.module';

import * as fromContainers from '@web/app/<%= path %>/<%= dasherize(name) %>/containers';
import * as fromComponents from '@web/app/<%= path %>/<%= dasherize(name) %>/components';
import * as fromShared from '@web/app/<%= path %>/<%= dasherize(name) %>/shared';

@NgModule({
  imports: [
    SharedModule,
    <%= classify(name) %>RoutingModule,
    StoreModule.forFeature('<%= underscore(name) %>', reducers),
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
