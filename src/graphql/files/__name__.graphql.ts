import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const pagination: DocumentNode = gql`
query pagination<%= classify(name) %>($<%= name %>_id: ID, $limit: Int, $page: Int) {
  pagination<%= classify(name) %>(<%= name %>_id: $<%= name %>_id, limit: $limit, page: $page) {
    total
    per_page
    current_page
    from
    to
    data {
      <%= name %>_id
      <%= name %>_created_at
      <%= name %>_updated_at
      <%= name %>_deleted_at
    }
  }
}
`;

export const store: DocumentNode = gql`
mutation store<%= classify(name) %>($arg1: String) {
  store<%= classify(name) %>(arg1: $arg1) {
    <%= name %>_id
  }
}
`;

export const update: DocumentNode = gql`
mutation update<%= classify(name) %>($<%= name %>_id: ID!) {
    update<%= classify(name) %>(<%= name %>_id: $<%= name %>_id) {
      <%= name %>_id
    }
}
`;

export const destroy: DocumentNode = gql`
mutation destroy<%= classify(name) %>($<%= name %>_id: ID!) {
  destroy<%= classify(name) %>(<%= name %>_id: $<%= name %>_id) {
    <%= name %>_id
  }
}
`;
