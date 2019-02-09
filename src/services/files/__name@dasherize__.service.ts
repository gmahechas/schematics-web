import { Injectable } from '@angular/core';

import { QueryRef } from 'apollo-angular';
import * as fromGraphql from '@web/app/<%= path %>/<%= dasherize(name) %>/graphql';

import * as fromModels from '@web/app/<%= path %>/<%= dasherize(name) %>/models';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {

  queryRef: QueryRef<fromModels.Pagination<%= classify(name) %>>;

  constructor(
    private <%= name %>PaginationGQL: fromGraphql.<%= classify(name) %>PaginationGQL,
    private <%= name %>StoreGQL: fromGraphql.<%= classify(name) %>StoreGQL,
    private <%= name %>UpdateGQL: fromGraphql.<%= classify(name) %>UpdateGQL,
    private <%= name %>DestroyGQL: fromGraphql.<%= classify(name) %>DestroyGQL
  ) { }

  load(search<%= classify(name) %>: fromModels.Search<%= classify(name) %>) {
    this.queryRef = this.<%= name %>PaginationGQL.watch({
      ...search<%= classify(name) %>.<%= underscore(name) %>,
      // TODO:
      limit: search<%= classify(name) %>.limit,
      page: search<%= classify(name) %>.page
    });

    return this.queryRef.valueChanges;
  }

  store(<%= name %>: fromModels.<%= classify(name) %>) {
    return this.<%= name %>StoreGQL.mutate(<%= name %>);
  }

  update(<%= name %>: fromModels.<%= classify(name) %>) {
    return this.<%= name %>UpdateGQL.mutate(<%= name %>);
  }

  destroy(<%= name %>: fromModels.<%= classify(name) %>) {
    return this.<%= name %>DestroyGQL.mutate(<%= name %>);
  }

  pagination(search<%= classify(name) %>: fromModels.Search<%= classify(name) %>) {

    return this.queryRef.fetchMore({
      query: this.<%= name %>PaginationGQL.document,
      variables: {
        <%= underscore(name) %>_id: search<%= classify(name) %>.<%= underscore(name) %>.<%= underscore(name) %>_id,
        // TODO:
        limit: search<%= classify(name) %>.limit,
        page: search<%= classify(name) %>.page
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) { return prev; }
        return Object.assign({}, prev, [prev, fetchMoreResult]);
      }
    });
  }

}
