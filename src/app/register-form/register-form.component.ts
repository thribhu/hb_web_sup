import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('mapsPlace') mapPlace: ElementRef;
  operationTypes: Array<string> = [
      'Unisex',
      'Mens',
      'Women',
      'Children',
      'Only Spa',
      'Auyrvedic Massage',
      'Family Lounge'
  ];
  businessExperience: Array<string> = [
    'No experience', '1 - 3 years', '3 - 5 years', 'more than 5 years'
  ];
  locationObject: any;
  constructor(private fb: FormBuilder) { }

  businessRegisterForm = this.fb.group(
      {
        businessName: ['', Validators.required],
        operationsType: ['', Validators.required],
        businessEnvironmentImages: ['', Validators.required],
        employeeNum: ['', Validators.required],
        ownerDetails: this.fb.group(
          {
            businessOwnerFirstName: ['', Validators.required],
            businessOwnerLastName: ['', Validators.required],
            age: ['', Validators.required],
            gender: ['', Validators.required],
            profileImage: ['', Validators.required],
            contactInfo: ['', Validators.required],
            expirence: ['', Validators.required],  // expirence in running business or as service provider
            identityNum: ['', Validators.required],
          }
        ),
        businessAddress: this.fb.group(
          {
            street: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            pincode: ['', Validators.required],
            businessAddressProofFile: ['', Validators.required], // proof for business
            contactDetails: ['', Validators.required],
          }
        ),
        employeeDetails: this.fb.group(
          {
            employeeFirstName: ['', Validators.required],
            employeeLastName: ['', Validators.required],
            age: ['', Validators.required],
            expirence: ['', Validators.required],
            employeeType: ['', Validators.required], // part-time or fulltime employeee
            gender: ['', Validators.required],
            serviceSpecilizedIn: ['', Validators.required],
            profileImage: ['', Validators.required],
            contactInfo: ['', Validators.required],

          }
        )
      }
  );
  // businessRegisterForm = new FormGroup(
  //   {
  //     businessName : new FormControl('', Validators.required),
  //     operationsType : new FormControl(''),
  //     businessEnvironmentImages: new FormControl(''),
  //     employeeNum: new FormControl(''),
  //     ownerDetails: new FormGroup(
  //       {
  //         businessOwnerName: new FormControl(''),
  //         age: new FormControl(''),
  //         gender: new FormControl(''),
  //         profileImage: new FormControl(''),
  //         contactInfo: new FormControl(''),
  //         expirence: new FormControl(''), // expirence in running business or as service provider
  //       }
  //     ),
  //     businessAddress: new FormGroup({
  //       street : new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       pincode : new FormControl(''),
  //       businessAddressProofFile : new FormControl('')
  //     }),
  //     employeeDetails : new FormGroup(
  //       {
  //         name: new FormControl(''),
  //         age: new FormControl(''),
  //         expirence: new FormControl(''),
  //         employeeType: new FormControl(''), // to know if the emp is fulltime or part-time
  //         gender: new FormControl(''),
  //         serviceSpecilizedIn: new FormControl(''),
  //         profileImage: new FormControl(''),
  //         contactInfo: new FormControl('')
  //       }
  //     )
  //   }
  // );
  ngOnInit() {
    this.mapPlace.nativeElement.value = 'hello from ViewChild!';
  }
  // private gettingCurrentLocation() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       console.log('log from service', this.latitude, this.longitude);
  //     });
  //   }
  // }

  // public settingLatAndLong(lat, lon) {
  //   this.latitude = lat;
  //   this.longitude = lon;
  //   console.log('log from service', this.latitude, this.longitude);
  // }

  onClickLocation() {
   if ('geolocation' in navigator) {
     navigator.geolocation.getCurrentPosition((postion) => {
       return postion.coords;
     });
   }
  }
}
