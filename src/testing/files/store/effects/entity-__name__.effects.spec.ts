import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Entity<%= classify(name) %>Effects } from './entity-<%= name %>.effects';

describe('Entity<%= classify(name) %>Effects', () => {
  let actions$: Observable<any>;
  let effects: Entity<%= classify(name) %>Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Entity<%= classify(name) %>Effects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(Entity<%= classify(name) %>Effects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
