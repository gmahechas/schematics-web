import { Injectable } from '@angular/core';

import { Destroy<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/destroy-<%= dasherize(name) %>.model';

import { Mutation } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>DestroyGQL extends Mutation<Destroy<%= classify(name) %>> {

  document: DocumentNode = gql`
    mutation destroy<%= classify(name) %>($<%= underscore(name) %>_id: ID!) {
      destroy<%= classify(name) %>(<%= underscore(name) %>_id: $<%= underscore(name) %>_id) {
        <%= underscore(name) %>_id
        // TODO:
        <%= underscore(name) %>_created_at
        <%= underscore(name) %>_updated_at
        <%= underscore(name) %>_deleted_at
      }
    }
  `;

}
