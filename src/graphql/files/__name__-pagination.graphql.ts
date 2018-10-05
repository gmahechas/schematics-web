import { Injectable } from '@angular/core';

import { Pagination<%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/pagination-<%= name %>.model';

import { Query } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>PaginationGQL extends Query<Pagination<%= classify(name) %>> {

  document: DocumentNode = gql`
    query pagination<%= classify(name) %>(
      $<%= name %>_id: ID,
      // TODO:
      $limit: Int,
      $page: Int
    ) {
      pagination<%= classify(name) %>(
        <%= name %>_id: $<%= name %>_id,
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
          <%= name %>_id
          // TODO:
          <%= name %>_created_at
          <%= name %>_updated_at
          <%= name %>_deleted_at
        }
      }
    }
  `;
}
