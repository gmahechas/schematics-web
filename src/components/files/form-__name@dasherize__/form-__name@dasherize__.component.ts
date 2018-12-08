import { Component, OnChanges, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/<%= dasherize(name) %>.model';

@Component({
  selector: 'app-form-<%= name %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-<%= name %>.component.html',
  styles: []
})
export class Form<%= classify(name) %>Component implements OnChanges, OnInit {

  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.<%= name %>Form.disable();
    } else {
      this.<%= name %>Form.enable();
    }
  }
  @Input() <%= name %>: <%= classify(name) %>;
  @Output() submitted: EventEmitter<<%= classify(name) %>> = new EventEmitter<<%= classify(name) %>>();

  <%= name %>Form = this.formBuilder.group({
    <%= underscore(name) %>: this.formBuilder.group({
      // TODO:
    }),
    // TODO:
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnChanges() {
    if (this.<%= name %>) {
      this.<%= name %>Form.reset();
      this.<%= name %>Form.setValue({
        <%= underscore(name) %>: {
          // TODO:
        },
        // TODO:
      });
    }
  }

  ngOnInit() {
  }

  onSubmit() {

    if (this.<%= name %>) {
      if (this.<%= name %>Form.dirty) {
        const updated = {
            <%= underscore(name) %>_id: this.<%= name %>.<%= underscore(name) %>_id,
            ...this.<%= name %>Form.value.<%= underscore(name) %>,
            // TODO:
        };
        this.submitted.emit(updated);
      }
    } else {
      this.submitted.emit({...this.<%= name %>Form.value.<%= underscore(name) %>}); // TODO:
    }

  }

}
