import { Component, OnChanges, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { <%= classify(name) %> } from './../../models/<%= name %>.model';

@Component({
  selector: 'app-form-<%= name %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-<%= name %>.component.html',
  styleUrls: ['./form-<%= name %>.component.scss']
})
export class Form<%= classify(name) %>Component implements OnChanges, OnInit {

  @Input() <%= name %>: <%= classify(name) %>;
  @Output() submitted: EventEmitter<<%= classify(name) %>> = new EventEmitter<<%= classify(name) %>>();

  <%= name %>Form: FormGroup = this.formBuilder.group({

  });

  ngOnChanges() {
    if (this.<%= name %>) {
      this.<%= name %>Form.reset();
      this.<%= name %>Form.setValue({

      });
    }
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit(<%= name %>Form: FormGroup) {

    if (this.<%= name %>) {
      if (this.<%= name %>Form.dirty && this.<%= name %>Form.valid) {
        const updated<%= classify(name) %> = {
          ...this.<%= name %>,
          ...<%= name %>Form.value
        };
        this.submitted.emit(updated<%= classify(name) %>);
      }
    } else {
      if (this.<%= name %>Form.valid) {
        this.submitted.emit(<%= name %>Form.value);
      }
    }

  }

}
