import { Injectable } from '@angular/core';

import { Pagination<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/pagination-<%= dasherize(name) %>.model';

import { Query } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>PaginationGQL extends Query<Pagination<%= classify(name) %>> {

  document: DocumentNode = gql`
    query pagination<%= classify(name) %>(
      $<%= underscore(name) %>_id: ID,
      // TODO:
      $limit: Int,
      $page: Int
    ) {
      pagination<%= classify(name) %>(
        <%= underscore(name) %>_id: $<%= underscore(name) %>_id,
        // TODO:
        limit: $limit,
        page: $page
      ) {
        total
        per_page
        current_page
        from
        to
        data {
          <%= underscore(name) %>_id
          // TODO:
          <%= underscore(name) %>_created_at
          <%= underscore(name) %>_updated_at
          <%= underscore(name) %>_deleted_at
        }
      }
    }
  `;
}
