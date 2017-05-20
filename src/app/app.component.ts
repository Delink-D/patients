import { Component } from '@angular/core';

@Component({
  selector: 'myapp',
  templateUrl: 
  	'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	addPatients = true;
	viewPatients = false;

	newPatient(){
		this.addPatients = true;
		this.viewPatients = false;
	}
	allPatients(){
		this.addPatients = false;
		this.viewPatients = true;
	}
}
