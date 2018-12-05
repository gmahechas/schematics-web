import { Injectable } from '@angular/core';

import { Update<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/update-<%= dasherize(name) %>.model';

import { Mutation } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>UpdateGQL extends Mutation<Update<%= classify(name) %>> {

  document: DocumentNode = gql`
    mutation update<%= classify(name) %>($<%= underscore(name) %>_id: ID!, // TODO:) {
        update<%= classify(name) %>(<%= underscore(name) %>_id: $<%= underscore(name) %>_id, // TODO:) {
          <%= underscore(name) %>_id
          // TODO:
          <%= underscore(name) %>_created_at
          <%= underscore(name) %>_updated_at
          <%= underscore(name) %>_deleted_at
        }
    }
  `;

}
