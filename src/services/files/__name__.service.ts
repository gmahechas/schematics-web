import { Injectable } from '@angular/core';

import { Apollo, QueryRef } from 'apollo-angular';
import * as fromGraphql from './../graphql/<%= name %>.graphql';

import * as fromModels from './../models';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {

  queryRef: QueryRef<fromModels.Pagination<%= classify(name) %>>;

  constructor(
    private apollo: Apollo
  ) { }

  load(search<%= classify(name) %>: fromModels.Search<%= classify(name) %>) {
    this.queryRef = this.apollo.watchQuery<fromModels.Pagination<%= classify(name) %>, fromModels.Search<%= classify(name) %>>({
      query: fromGraphql.pagination,
      variables: {
        ...search<%= classify(name) %>.<%= name %>,
        // TODO:
        limit: search<%= classify(name) %>.limit,
        page: search<%= classify(name) %>.page
      }
    });

    return this.queryRef.valueChanges;
  }

  store(<%= name %>: fromModels.<%= classify(name) %>) {
    return this.apollo.mutate<fromModels.Store<%= classify(name) %>>({
      mutation: fromGraphql.store,
      variables: <%= name %>
    });
  }

  update(<%= name %>: fromModels.<%= classify(name) %>) {
    return this.apollo.mutate<fromModels.Update<%= classify(name) %>>({
      mutation: fromGraphql.update,
      variables: <%= name %>
    });
  }

  destroy(<%= name %>: fromModels.<%= classify(name) %>) {
    return this.apollo.mutate<fromModels.Destroy<%= classify(name) %>>({
      mutation: fromGraphql.destroy,
      variables: {
        <%= name %>_id: <%= name %>.<%= name %>_id
      }
    });
  }

  pagination(search<%= classify(name) %>: fromModels.Search<%= classify(name) %>) {
    return this.queryRef.fetchMore({
      query: fromGraphql.pagination,
      variables: {
        <%= name %>_id: search<%= classify(name) %>.<%= name %>.<%= name %>_id,
        // TODO:
        limit: search<%= classify(name) %>.limit,
        page: search<%= classify(name) %>.page
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) { return prev; }
        return fetchMoreResult;
      }
    });
  }

}
