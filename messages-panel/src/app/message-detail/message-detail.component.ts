import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Message } from '../message';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
	
  msg: Message = { id: 0, title: '', hour: '', subject: '', body: '' };
  isLoadingResults = false;     

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  
  getMessageDetails(id) {
	  this.api.getMessage(id)
		.subscribe(data => {
		  this.msg = data;
		  console.log(this.msg);
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
	  this.getMessageDetails(this.route.snapshot.params['id']);
	}

}
