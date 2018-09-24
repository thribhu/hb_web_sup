import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stylist-form',
  templateUrl: './stylist-form.component.html',
  styleUrls: ['./stylist-form.component.css']
})
export class StylistFormComponent implements OnInit {
  stylistForm: FormGroup;
  constructor() { }
  gender = ['male', 'female'];
  ngOnInit() {
    this.stylistForm = new FormGroup({
      'stylistName': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'age': new FormControl('', [Validators.required, Validators.maxLength(2)]),
      'gender': new FormControl('', Validators.required),
      'exp': new FormControl('', [Validators.required, Validators.maxLength(2)])
    });
  }

}
