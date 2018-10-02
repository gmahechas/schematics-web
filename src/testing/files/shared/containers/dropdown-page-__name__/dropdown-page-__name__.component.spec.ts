import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPage<%= classify(name) %>Component } from './dropdown-page-<%= name %>.component';

describe('DropdownPage<%= classify(name) %>Component', () => {
  let component: DropdownPage<%= classify(name) %>Component;
  let fixture: ComponentFixture<DropdownPage<%= classify(name) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownPage<%= classify(name) %>Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownPage<%= classify(name) %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
