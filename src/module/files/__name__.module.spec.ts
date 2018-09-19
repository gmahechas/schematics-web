import { <%= classify(name) %>Module } from './<%= name %>.module';

describe('<%= classify(name) %>Module', () => {
  let <%= name %>Module: <%= classify(name) %>Module;

  beforeEach(() => {
    <%= name %>Module = new <%= classify(name) %>Module();
  });

  it('should create an instance', () => {
    expect(<%= name %>Module).toBeTruthy();
  });
});
