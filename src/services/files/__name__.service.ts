import { Injectable } from '@angular/core';

import * as fromGraphql from './../graphql';

import * as fromModels from './../models';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service {

  constructor(
    private <%= name %>Pagination: fromGraphql.<%= classify(name) %>PaginationGQL,
    private <%= name %>StoreGQL: fromGraphql.<%= classify(name) %>StoreGQL,
    private <%= name %>UpdateGQL: fromGraphql.<%= classify(name) %>UpdateGQL,
    private <%= name %>DestroyGQL: fromGraphql.<%= classify(name) %>DestroyGQL
  ) { }

  load(search<%= classify(name) %>: fromModels.Search<%= classify(name) %>) {
    return this.<%= name %>Pagination.watch({
      ...search<%= classify(name) %>.<%= name %>,
      // TODO:
      limit: search<%= classify(name) %>.limit,
      page: search<%= classify(name) %>.page
    }).valueChanges;
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
    return this.<%= name %>Pagination.fetch({
      <%= name %>_id: search<%= classify(name) %>.<%= name %>.<%= name %>_id,
      // TODO:
      limit: search<%= classify(name) %>.limit,
      page: search<%= classify(name) %>.page
    },);
  }

}
