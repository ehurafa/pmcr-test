import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Message } from '../message';


@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
	
  message: Message = { id: 0, title: '', hour: '', subject: '', body: '' };
  isLoadingResults = false;     
  
   

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  
  
  getMessageDetails(id) {
	  this.api.getMessage(id)
		.subscribe(data => {
		  this.message = data;
		  console.log(this.message);
		  this.isLoadingResults = false;
		});
	}
	
	
  
	
	deleteMessage(id) {
	  this.isLoadingResults = true;
	  this.api.deleteMessage(id)
		.subscribe(res => {
			this.isLoadingResults = false;
			this.router.navigate(['/inicial']);
		  }, (err) => {
			console.log(err);
			this.isLoadingResults = false;
		  }
		);
	}
	
	 


 
	
  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getMessageDetails(this.route.snapshot.params['id']);
  }


}
