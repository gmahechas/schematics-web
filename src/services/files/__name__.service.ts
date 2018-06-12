import { Injectable } from '@angular/core';

import { Apollo, QueryRef } from 'apollo-angular';
import * as fromGraphql from './../graphql/<%= name %>.graphql';

import * as fromModels from './../models';

import { Observable } from 'rxjs';

@Injectable()
export class <%= classify(name) %>Service {

  queryRef: QueryRef<fromModels.Pagination<%= classify(name) %>>;

  constructor(
    private apollo: Apollo
  ) { }

  load(search<%= classify(name) %>: fromModels.Search<%= classify(name) %>) {
    this.queryRef = this.apollo.watchQuery<fromModels.Pagination<%= classify(name) %>, fromModels.Search<%= classify(name) %>>({
      query: fromGraphql.pagination,
      variables: search<%= classify(name) %>
    });

    return this.queryRef.valueChanges;
  }

  store(<%= name %>: fromModels.<%= classify(name) %>): Observable<any> {
    return this.apollo.mutate<fromModels.Store<%= classify(name) %>>({
      mutation: fromGraphql.store,
      variables: {
      }
    });
  }

  update(<%= name %>: fromModels.<%= classify(name) %>): Observable<any> {
    return this.apollo.mutate<fromModels.Update<%= classify(name) %>>({
      mutation: fromGraphql.update,
      variables: {
        <%= name %>_id: <%= name %>.<%= name %>_id
      }
    });
  }

  destroy(<%= name %>: fromModels.<%= classify(name) %>): Observable<any> {
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
      variables: search<%= classify(name) %>,
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) { return prev; }
        return fetchMoreResult.data;
      }
    });
  }

}
