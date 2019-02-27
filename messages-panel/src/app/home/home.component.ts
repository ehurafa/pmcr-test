import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ActivatedRoute, Router } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../services/api.service';
import { Message } from '../Message';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	displayedColumns: string[] = ['title', 'hour', 'view' , 'edit'];
    data: Message[] = [];
    isLoadingResults = true;

 
 
    constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  
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
		
		this.api.getMessages()
		  .subscribe(res => {
			this.data = res;
			console.log('this.data ', this.data);
			this.isLoadingResults = false;
		  }, err => {
			console.log('err ', err);
			this.isLoadingResults = false;
		  });  
		
	}

}
