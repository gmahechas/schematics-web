import { TestBed, async, inject } from '@angular/core/testing';

import { <%= classify(name) %>ExistGuard } from '@web/app/<%= path %>/<%= name %>/guards/<%= name %>-exist.guard';

describe('<%= classify(name) %>ExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [<%= classify(name) %>ExistGuard]
    });
  });

  it('should ...', inject([<%= classify(name) %>ExistGuard], (guard: <%= classify(name) %>ExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
