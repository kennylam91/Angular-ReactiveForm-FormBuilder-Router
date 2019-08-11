import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: ['']
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

}
