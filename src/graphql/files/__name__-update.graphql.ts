import { Injectable } from '@angular/core';

import { Update<%= classify(name) %> } from '../models/update-<%= name %>.model';

import { Mutation } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>UpdateGQL extends Mutation<Update<%= classify(name) %>> {

  document: DocumentNode = gql`
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

}
