import { Injectable } from '@angular/core';

import { StoreCountry } from '../models/store-country.model';

import { Mutation } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CountryStoreGQL extends Mutation<StoreCountry> {

  document: DocumentNode = gql`
    mutation storeCountry(// TODO:) {
      storeCountry(// TODO:) {
        country_id
        // TODO:
        country_created_at
        country_updated_at
        country_deleted_at
      }
    }
  `;

}