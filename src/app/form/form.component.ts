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
  genders: String[] = ['Male', 'Female']; 
  form!: FormGroup;
  
  constructor(private fb: FormBuilder,){
    this.form = this.fb.group({
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],

    });
  }

  get full_name() {return this.form.get('full_name')};

  onSubmit(){
    console.log('nama: ', this.full_name?.value);
    console.log('gender: ', this.gender);
    
  }

}
