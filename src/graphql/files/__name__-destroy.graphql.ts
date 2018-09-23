import { Injectable } from '@angular/core';

import { Destroy<%= classify(name) %> } from '../models/destroy-<%= name %>.model';

import { Mutation } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>DestroyGQL extends Mutation<Destroy<%= classify(name) %>> {

  document: DocumentNode = gql`
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

}