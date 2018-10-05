import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Layout<%= classify(name) %>Effects } from '@web/app/<%= path %>/<%= name %>/store/effects/layout-<%= name %>.effects';

describe('Layout<%= classify(name) %>Effects', () => {
  let actions$: Observable<any>;
  let effects: Layout<%= classify(name) %>Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Layout<%= classify(name) %>Effects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(Layout<%= classify(name) %>Effects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
