import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { SalonModel } from '../../shared/salon.model';

@Component({
  selector: 'app-salon-add',
  templateUrl: './salon-add.component.html',
  styleUrls: ['./salon-add.component.css']
})
export class SalonAddComponent implements OnInit {
  salonRegisterForm: FormGroup;
  pattern = '^[6789]\d{9}';
  genders = ['male', 'female', 'other'];
  constructor(private fb: FormBuilder) {
    this.salonRegisterForm = this.fb.group({
      'salonName': [null, Validators.required],
      'ownerName': ['thribhuvan', Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'primaryNumber': ['9876543210', [Validators.required, Validators.pattern['^[6789]\d{3}']]],
      'salonStartDate': [null, Validators.required],
      'stylistsWorking': [null, [Validators.required, Validators.min(1)]],
      'chairsInSalon': [null, [Validators.required, Validators.min(1)]]
    });
  }
  ngOnInit() {
  // this.create_salon_form();
  }

    /*
   this.salonRegisterForm = this.fb.group({
    'salonName': [(null, [Validators.required, Validators.maxLength(20)]),
    'ownerName': [(null, [Validators.required]),
    'email': [(null, [Validators.required, Validators.email]),
    'dob' : [(null, [Validators.required]),
     'primaryNumber': [(null, [Validators.required, Validators.pattern['^[6789]\d{9}']]),
     'salonStartDate': [(null, [Validators.required]),
     'stylistWorking' : [(null, [Validators.required, Validators.min(1)]),
     'chairsInSalons': [(null, [Validators.required, Validators.min(1)]),

  });
  */
  create_salon_form() {
    this.salonRegisterForm = this.fb.group({
      'salonName': [null, Validators.required],
      'ownerName': [null, Validators.required],
      'stylistDetails': this.fb.array([
        this.stylist_details()
      ])
    });
  }
  stylist_details() {
    return this.fb.group({
      'stylistName': [null, Validators.required],
      'Gender': ['male', Validators.required],
      'exp': [null, Validators.required],
      'contactNumber': [null, [Validators.required, Validators.pattern['^[6789]\d{9}']]],
    });
  }
   addStylist() {
     const control = <FormArray>this.salonRegisterForm.controls['stylistDetails'];
     control.push(this.stylist_details());
   }

   removeStylist(i: number) {
     const control = <FormArray>this.salonRegisterForm.controls['stylistDetails'];
     control.removeAt(i);
   }
  onSubmit(form: FormGroup) {
    // console.log('Valid?', form.valid); // true or false
    /*
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);

     */
    console.log(this.salonRegisterForm.value);
  }
}

