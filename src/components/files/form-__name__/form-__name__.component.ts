import { Component, OnChanges, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { <%= classify(name) %> } from '@web/app/<%= path %>/<%= name %>/models/<%= name %>.model';

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
    <%= name %>: this.formBuilder.group({
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
        <%= name %>: {
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
            <%= name %>_id: this.<%= name %>.<%= name %>_id,
            ...this.<%= name %>Form.value.<%= name %>,
            // TODO:
        };
        this.submitted.emit(updated);
      }
    } else {
      this.submitted.emit({...this.<%= name %>Form.value.<%= name %>}); // TODO:
    }

  }

}
