import { createSelector } from '@ngrx/store';

import * as fromFeature from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers';
import * as fromLayout from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers/layout-<%= dasherize(name) %>.reducer';

export const getLayoutState = createSelector(
  fromFeature.get<%= classify(name) %>State,
  (state: fromFeature.<%= classify(name) %>State) => state.layout
);

export const getError = createSelector(
  getLayoutState,
  fromLayout.getError
);

export const getPending = createSelector(
  getLayoutState,
  fromLayout.getPending
);
