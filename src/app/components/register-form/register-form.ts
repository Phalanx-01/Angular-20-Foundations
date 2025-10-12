import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

interface RegistrationData{
  username: string;
  email: string;
  password: string;
}

function passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
  const hasNumber = /\d/.test(control.value);
  return !hasNumber ? { noNumber:true}:null;
}

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
 registerForm: FormGroup<{
  username: FormControl<string>,
  email: FormControl<string>,
  password: FormControl<string>
 }>;

 constructor(private fb: FormBuilder){
  this.registerForm = this.fb.group({
    username: this.fb.control('',{ validators:[Validators.required], nonNullable:true }),
    email: this.fb.control('',{validators:[Validators.required, Validators.email], nonNullable:true }),
    password: this.fb.control('',{ validators: [Validators.required, Validators.minLength(6), passwordStrengthValidator], nonNullable: true }),
  });
 }

submit(){
  if(this.registerForm.valid){
    const data: RegistrationData = this.registerForm.getRawValue();
    alert('Registered: ' + JSON.stringify(data));
  }
}

}
