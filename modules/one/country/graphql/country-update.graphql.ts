import { Injectable } from '@angular/core';

import { UpdateCountry } from '../models/update-country.model';

import { Mutation } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CountryUpdateGQL extends Mutation<UpdateCountry> {

  document: DocumentNode = gql`
    mutation updateCountry($country_id: ID!, // TODO:) {
        updateCountry(country_id: $country_id, // TODO:) {
          country_id
          // TODO:
          country_created_at
          country_updated_at
          country_deleted_at
        }
    }
  `;

}
