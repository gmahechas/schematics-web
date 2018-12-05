import { Injectable } from '@angular/core';

import { Store<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/store-<%= dasherize(name) %>.model';

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
        <%= underscore(name) %>_id
        // TODO:
        <%= underscore(name) %>_created_at
        <%= underscore(name) %>_updated_at
        <%= underscore(name) %>_deleted_at
      }
    }
  `;

}
