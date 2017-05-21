import { Component } from '@angular/core';
import  { PatientModule } from './patient/patient.module';



@Component({
  selector: 'myapp',
  templateUrl: 
  	'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	addPatients = true;
	viewPatients = false;
	saved = false;
	ntSAved = false;

	patients: PatientModule[] = [
		// example of patient details
		new PatientModule("Delink", "Mwangi", "098876236", "delinkdesigns@gmail.com", "23-12-1999")
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
		// log
		console.log(this.editPatients);
	}

	// finish editing function
	finishedEditing(){
		this.editPatients = null;
	}
}
