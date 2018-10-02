import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form<%= classify(name) %>Component } from './form-<%= name %>.component';

describe('Form<%= classify(name) %>Component', () => {
  let component: Form<%= classify(name) %>Component;
  let fixture: ComponentFixture<Form<%= classify(name) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form<%= classify(name) %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form<%= classify(name) %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
