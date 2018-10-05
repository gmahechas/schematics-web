import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Service } from '@web/app/<%= path %>/<%= name %>/services/<%= name %>.service';

describe('<%= classify(name) %>Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: <%= classify(name) %>Service = TestBed.get(<%= classify(name) %>Service);
    expect(service).toBeTruthy();
  });
});
