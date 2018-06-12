import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromLayout from '../reducers/layout-<%= name %>.reducer';

export const getLayoutState = createSelector(
  fromFeature.get<%= classify(name) %>State,
  (state: fromFeature.<%= classify(name) %>State) => state.layout
);

export const getError = createSelector(
  getLayoutState,
  fromLayout.getError
);
