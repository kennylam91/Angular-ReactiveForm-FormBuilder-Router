import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.name = this.formBuilder.control(['']);
  }

}
