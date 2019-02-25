import { Component, OnInit } from '@angular/core';

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
	id:number=0;
	message_title:string='';
	message_body:string='';
	message_subject:number=null;
	isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }
  
  getMessage(id) {
	  this.api.getMessage(id).subscribe(data => {
		this.id = data.id;
		this.messageForm.setValue({
		  message_title: data.title,
		  message_body: data.body,
		  message_subject: data.subject
		});
	  });
	}
  
  onFormSubmit(form:NgForm) {
	  this.isLoadingResults = true;
	  this.api.updateMessage(this.id, form)
		.subscribe(res => {
			let id = res['id'];
			this.isLoadingResults = false;
			this.router.navigate(['/message-details', id]);
		  }, (err) => {
			console.log(err);
			this.isLoadingResults = false;
		  }
		);
	}
	
	messageDetails() {
	  this.router.navigate(['/message-details', this.id]);
	}

  ngOnInit() {
  this.getMessage(this.route.snapshot.params['id']);
  this.messageForm = this.formBuilder.group({
    'message_title' : [null, Validators.required],
    'message_body' : [null, Validators.required],
    'message_subject' : [null, Validators.required]
  });
}

}
