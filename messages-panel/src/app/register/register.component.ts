import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators  } from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
	messageForm: FormGroup;
	message_tit: string='';
	message_body: string='';
	message_subject: string=null;
	hour: Date= new Date();
	isLoadingResults = false;
	

  constructor( private router: Router, private api: ApiService, private formBuilder: FormBuilder ) {
  }


  ngOnInit() {
	  this.messageForm = this.formBuilder.group({
		'title' : [null, Validators.required],
		'body' : [null, Validators.required],
		'subject' : [null, Validators.required],
		'hour' : [new Date()]
	  });
  }
  
   onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addMessage(form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/inicial']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }



}
