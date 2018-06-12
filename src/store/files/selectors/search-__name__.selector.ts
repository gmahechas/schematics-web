import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSearch from '../reducers/search-<%= name %>.reducer';

export const getSearchState = createSelector(
    fromFeature.get<%= classify(name) %>State,
    (state: fromFeature.<%= classify(name) %>State) => state.search
);

export const getLoaded = createSelector(
    getSearchState,
    fromSearch.getLoaded
);

export const getQuery = createSelector(
    getSearchState,
    fromSearch.getQuery
);
