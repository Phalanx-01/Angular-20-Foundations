import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

interface RegistrationData{
  username: string;
  email: string;
  password: string;
  phones: string[];
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
  password: FormControl<string>,
  phones: FormArray<FormControl<string>>
 }>;

 constructor(private fb: FormBuilder){
  this.registerForm = this.fb.group({
    username: this.fb.control('',{ validators:[Validators.required], nonNullable:true }),
    email: this.fb.control('',{validators:[Validators.required, Validators.email], nonNullable:true }),
    password: this.fb.control('',{ validators: [Validators.required, Validators.minLength(6), passwordStrengthValidator], nonNullable: true }),
    phones: this.fb.array<FormControl<string>>([])
  });
 }

 get phones() {
  return this.registerForm.get('phones') as FormArray<FormControl<string>>;
 }

 addPhone() {
  const control = this.fb.control('', { nonNullable:true });
  this.phones.push(control);
 }

removePhone(index: number) {
  this.phones.removeAt(index);
}

submit(){
  if(this.registerForm.valid){
    const data: RegistrationData = this.registerForm.getRawValue();
    const cleanPhones = data.phones.filter(p => p && p.trim() !== '');
    const phoneData: RegistrationData = {
      ...data,
      phones: cleanPhones
    };
    alert('Registered: ' + JSON.stringify(data));
  }
 }

ngOnInit() {
  this.registerForm.valueChanges.subscribe(value => {
    console.log('Form changed',value);
  });
}

}
