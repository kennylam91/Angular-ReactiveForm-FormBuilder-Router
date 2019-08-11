import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validator} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        country: ['', Validators.required],
        city: [''],
        street: ['']
      }),
      aliases: this.formBuilder.array([
        this.formBuilder.control('')
      ])
    });
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'kenny',
      lastName: 'lam',
      address: {
        country: 'Vietnam'
      },
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;

  }

  addAlias() {

  }
}
