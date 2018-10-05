import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@web/app/shared/shared.module';

import { SearchForm<%= classify(name) %>Component } from '@web/app/<%= path %>/<%= name %>/components/search-form-<%= name %>/search-form-<%= name %>.component';

describe('SearchForm<%= classify(name) %>Component', () => {
  let component: SearchForm<%= classify(name) %>Component;
  let fixture: ComponentFixture<SearchForm<%= classify(name) %>Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, SharedModule],
      declarations: [SearchForm<%= classify(name) %>Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForm<%= classify(name) %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
