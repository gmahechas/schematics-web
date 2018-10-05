import { Injectable } from '@angular/core';

import { Store<%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/store-<%= name %>.model';

import { Mutation } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class <%= classify(name) %>StoreGQL extends Mutation<Store<%= classify(name) %>> {

  document: DocumentNode = gql`
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

}