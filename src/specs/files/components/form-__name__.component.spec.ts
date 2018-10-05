import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@web/app/shared/shared.module';

import { Form<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= name %>/components/form-<%= name %>/form-<%= name %>.component';

describe('Form<%= classify(name) %>Component', () => {
  let component: Form<%= classify(name) %>Component;
  let fixture: ComponentFixture<Form<%= classify(name) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, SharedModule],
      declarations: [Form<%= classify(name) %>Component]
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
