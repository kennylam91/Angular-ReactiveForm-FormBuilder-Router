import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Validator} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.formBuilder.group({
      country: ['', Validators.required],
      city: [''],
      street: ['']
    })
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'kenny',
      lastName: 'lam',
      address: {
        country: 'Vietnam'
      }
    })
  }
}
