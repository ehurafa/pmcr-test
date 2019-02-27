import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Message } from '../message';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	
	messageForm: FormGroup;
	id:number= 0;
	title:string='';
	body:string='';
	subject:number=null;
	hour:string='';
	isLoadingResults = false;
	
	

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }
  
  
  getMessage(id) {
	  this.api.getMessage(id).subscribe(data => {
		this.id = data.id;
		this.messageForm.setValue({
		  title: data.title,
		  body: data.body,
		  subject: data.subject,
		  hour: data.hour
		});
	  });
	}
	

  
  onFormSubmit(form:NgForm) {
	  this.isLoadingResults = true;
	  this.api.updateMessage(this.id, form)
		.subscribe(res => {
			let id = res['id'];
			this.isLoadingResults = false;
			this.router.navigate(['/mensagem', id]);
		  }, (err) => {
			console.log(err);
			this.isLoadingResults = false;
		  }
		);
	}

	
	messageDetails() {
	  this.router.navigate(['/mensagem', this.id]);
	}
	
	

  ngOnInit() {
	  this.getMessage(this.route.snapshot.params['id']);
	  this.messageForm = this.formBuilder.group({
		'title' : [null, Validators.required],
		'body' : [null, Validators.required],
		'subject' : [null, Validators.required],
		'hour' : [null, Validators.required]
	  });
	}


  
  

}
