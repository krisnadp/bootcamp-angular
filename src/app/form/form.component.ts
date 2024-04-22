import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  name: String = '';
  email: String = '';
  gender: String = '';
  birtdate: String = '';
  password: String = '';
  genders: String[] = ['Male', 'Female']; 
  form!: FormGroup;
  
  constructor(private fb: FormBuilder,){
    this.form = this.fb.group({
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      email_value: ['', [Validators.required, Validators.email]],
      birtday_value: ['', [Validators.required]],
      gender_value: ['', [Validators.required]],
      password_value: ['', [Validators.required,Validators.minLength(8),Validators.pattern("^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{8,}$")]],

    });
  }

  get full_name() {return this.form.get('full_name')};
  get email_value() {return this.form.get('email_value')};
  get birtday_value() {return this.form.get('birtday_value')};
  get gender_value() {return this.form.get('gender_value')};
  get password_value() {return this.form.get('password_value')};

  onSubmit(){
    console.log('nama: ', this.full_name?.value);
    console.log('email: ', this.email_value?.value);
    console.log('birthday: ', this.birtday_value?.value);
    console.log('gender: ', this.gender_value?.value);
    console.log('password: ', this.password_value?.value);
    
  }

}
