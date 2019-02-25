import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
	messageForm: FormGroup;
	message_tit:string='';
	message_body:string='';
	message_subject:number=null;
	updated_at:Date=null;
	isLoadingResults = false;

 /* messagePost = {
    title: '',
	  subject: '',
    body: '',
    position: 0,
    date_posted: new Date()
  };
*/
  constructor( private router: Router, private api: ApiService, private formBuilder: FormBuilder ) {
  }

  

  /*onSubmit(): void {
    this.messagePost.position = this.dataService.dataLength();
  }
*/

	onFormSubmit(form:NgForm) {
	  this.isLoadingResults = true;
	  this.api.addMessage(form)
		.subscribe(res => {
			let id = res['_id'];
			this.isLoadingResults = false;
			this.router.navigate(['/me-detassageils', id]);
		  }, (err) => {
			console.log(err);
			this.isLoadingResults = false;
		  });
	}

  ngOnInit() {
	  this.messageForm = this.formBuilder.group({
		'message_title' : [null, Validators.required],
		'message_body' : [null, Validators.required],
		'message_subject' : [null, Validators.required],
		'updated_at' : [null, Validators.required]
	  });
  }

}
