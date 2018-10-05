import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPage<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= name %>/containers/index-page-<%= name %>/index-page-<%= name %>.component';

describe('IndexPage<%= classify(name) %>Component', () => {
  let component: IndexPage<%= classify(name) %>Component;
  let fixture: ComponentFixture<IndexPage<%= classify(name) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPage<%= classify(name) %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPage<%= classify(name) %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
