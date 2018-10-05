import { <%= classify(name) %>Module } from '@web/app/<%= path %>/<%= name %>/<%= name %>.module';

describe('<%= classify(name) %>Module', () => {
  let <%= name %>Module: <%= classify(name) %>Module;

  beforeEach(() => {
    <%= name %>Module = new <%= classify(name) %>Module();
  });

  it('should create an instance', () => {
    expect(<%= name %>Module).toBeTruthy();
  });
});
