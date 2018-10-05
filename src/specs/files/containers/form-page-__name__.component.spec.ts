import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPage<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= name %>/containers/form-page-<%= name %>/form-page-<%= name %>.component';

describe('FormPage<%= classify(name) %>Component', () => {
  let component: FormPage<%= classify(name) %>Component;
  let fixture: ComponentFixture<FormPage<%= classify(name) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPage<%= classify(name) %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPage<%= classify(name) %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
