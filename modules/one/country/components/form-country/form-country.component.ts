import { Component, OnChanges, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Country } from './../../models/country.model';

@Component({
  selector: 'app-form-country',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form-country.component.html',
  styles: []
})
export class FormCountryComponent implements OnChanges, OnInit {

  @Input() country: Country;
  @Output() submitted: EventEmitter<Country> = new EventEmitter<Country>();

  countryForm: FormGroup = this.formBuilder.group({
    country: this.formBuilder.group({
      // TODO:
    }),
    // TODO:
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnChanges() {
    if (this.country) {
      this.countryForm.reset();
      this.countryForm.setValue({
        country: {
          // TODO:
        },
        // TODO:
      });
    }
  }

  ngOnInit() {
  }

  onSubmit(countryForm: FormGroup) {

    if (this.country) {
      if (countryForm.dirty) {
        const updated = {
            country_id: this.country.country_id,
            ...countryForm.value.country,
            // TODO:
        };
        this.submitted.emit(updated);
      }
    } else {
      this.submitted.emit({...countryForm.value.country}); // TODO:
    }

  }

}
