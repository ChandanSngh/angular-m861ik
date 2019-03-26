import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pLocations = ['Banagalore', 'Mumbai', 'Delhi'];
  formData: any = {
    id: [''],
    name: ["", Validators.required],
    phoneNumber: ["", phoneNumberValidator],
    email: ['', Validators.email],
    gender: ['', Validators.required],
    locations: new FormArray([], Validators.required)
  };
  model: any = {};
  userForm: any;
  isChangeFlow = false;
  constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private service: StoreService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group(this.formData);
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      if (params.id) {
        debugger;
        var data = this.service.getUserById(params.id);
        this.formData.id[0] = data.id;
        this.formData.name[0] = data.name;
        this.formData.phoneNumber[0] = data.phoneNumber;
        this.formData.email[0] = data.email;
        this.formData.gender[0] = data.gender;
        this.formData.locations = this.mappingLocations(data.locations)
        this.isChangeFlow = true

      } else {
        this.formData.locations = this.mappingLocations([])
      }

    });

      
  }

  mappingLocations(locations) {
    this.pLocations.forEach((location, index) => {
      (this.userForm.controls.locations as FormArray).push(new FormControl(locations[index]))
    })
  }

  onSubmit() {
    console.log(this.userForm.value);
    if (this.isChangeFlow) {
      this.service.editUser(this.userForm.value)
    } else {
      this.service.addUser(this.userForm.value)
    }
  }


}

function phoneNumberValidator(control: FormControl) {
  return /[0-9\+\-\ ]/.test(control.value)? null: {numberValid : true};
}