import { Injectable } from '@angular/core';

import { PaginationCountry } from '../models/pagination-country.model';

import { Query } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CountryPaginationGQL extends Query<PaginationCountry> {

  document: DocumentNode = gql`
    query paginationCountry(
      $country_id: ID,
      // TODO:
      $limit: Int,
      $page: Int
    ) {
      paginationCountry(
        country_id: $country_id,
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
          country_id
          // TODO:
          country_created_at
          country_updated_at
          country_deleted_at
        }
      }
    }
  `;
}
