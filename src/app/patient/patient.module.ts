import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PatientModule {
	constructor(public fname: string, public lname: string, public phone: string, public email: string, public dob: string){}
}