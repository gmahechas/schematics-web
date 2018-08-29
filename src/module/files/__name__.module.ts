import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/shared.module';
import { <%= classify(name) %>RoutingModule } from './<%= name %>-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromSharedContainers from './shared/containers';
import * as fromGuards from './guards';

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
    ...fromSharedContainers.containers
  ],
  providers: [
    ...fromGuards.guards
  ],
  exports: [
    ...fromSharedContainers.containers
  ]
})
export class <%= classify(name) %>Module { }
