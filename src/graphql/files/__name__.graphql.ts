import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

export const pagination: DocumentNode = gql`
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

export const store: DocumentNode = gql`
mutation store<%= classify(name) %>(// TODO:) {
  store<%= classify(name) %>(// TODO:) {
    <%= name %>_id
    // TODO:
    <%= name %>_created_at
    <%= name %>_updated_at
    <%= name %>_deleted_at
  }
}
`;

export const update: DocumentNode = gql`
mutation update<%= classify(name) %>($<%= name %>_id: ID!, // TODO:) {
    update<%= classify(name) %>(<%= name %>_id: $<%= name %>_id, // TODO:) {
      <%= name %>_id
      // TODO:
      <%= name %>_created_at
      <%= name %>_updated_at
      <%= name %>_deleted_at
    }
}
`;

export const destroy: DocumentNode = gql`
mutation destroy<%= classify(name) %>($<%= name %>_id: ID!) {
  destroy<%= classify(name) %>(<%= name %>_id: $<%= name %>_id) {
    <%= name %>_id
    // TODO:
    <%= name %>_created_at
    <%= name %>_updated_at
    <%= name %>_deleted_at
  }
}
`;