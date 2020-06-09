import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel =new RegisterModel();

  registerForm: any = FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      'name':[this.user.name,[Validators.required]],
      'company':[this.user.company,[Validators.required]],
      'position':[this.user.position,[Validators.required]],
      'department':[this.user.department,[Validators.required]],
      'phone':[this.user.phone,[Validators.required, Validators.minLength(10)]],
      'mobile':[this.user.mobile,[Validators.required, Validators.minLength(10)]],
      'website':[this.user.website,[Validators.required]],
      'skype':[this.user.skype,[Validators.required]],
      'email':[this.user.email,[Validators.email]],
      'password':[this.user.password,[Validators.required]],
      'address':[this.user.address,[Validators.required , Validators.minLength(6), Validators.maxLength(30)]],

    });
  }

  onRegisterSubmit(){
    alert(this.user.name + ' ' + this.user.email +' '+ this.user.mobile);
  }
}
