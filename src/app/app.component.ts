import { Component } from '@angular/core';
import  { PatientModule } from './patient/patient.module';

@Component({
  selector: 'myapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	addPatients = true;
	viewPatients = false;
	saved = false;
	ntSAved = false;

	patients: PatientModule[] = [
		// example of patient details
		new PatientModule("Delink", "Mwangi", "078876236", "delinkdesigns@gmail.com", "1999-09-09")
	]

	// a function to show add patients form
	newPatient(){
		this.addPatients = true;
		this.viewPatients = false;
	}
	// function to show all patients
	allPatients(){
		this.addPatients = false;
		this.viewPatients = true;
	}

	// function to save new patient 
	addPatient(fname: string, lname: string, phone: string, email: string, dob: string){
		var patiendAdd: PatientModule = new PatientModule(fname, lname, phone, email, dob);

		if (patiendAdd) { // check if save is completed
			// add record to the array
			this.patients.push(patiendAdd);
			this.saved = true;
		}else{
			this.ntSAved = true;
		}
	}

	// function to edit an existing patient
	editPatients: PatientModule = null;
	editPatient(patient: PatientModule){
		this.editPatients = patient;
	}

	// finish editing function
	finishedEditing(){
		this.editPatients = null;
	}

	// function to remove a record
	deletePatient(patient: PatientModule){
		var index = this.patients.indexOf(patient);
		// check if the confirmation if true
		if (confirm("Are you sure you want to delete this record?")) {
			// remove record from the array
			this.patients.splice(index, 1);
		}
	}
}
