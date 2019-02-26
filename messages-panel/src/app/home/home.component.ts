import { Component, OnInit } from '@angular/core';

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

 
  constructor(private api: ApiService) {
  }
  
    
	// data: Message[] = [];
	private data: any[];

	isLoadingResults = false;
  
   displayedColumns = ['title', 'hour',  'subject', 'body' ,'delete'];
   //dataSource = new MessageDataSource(this.dataService);
   
   
  
  ngOnInit() {
	  /*this.api.getMessages()
		.subscribe(res => {
		  this.data = res;
		  console.log(this.data);
		  this.isLoadingResults = false;
		}, err => {
		  console.log(err);
		  this.isLoadingResults = false;
		});      
		*/
		
		this.api.getAll()
		.subscribe(res => {
		  this.data = res;
		  console.log(this.data);
		  this.isLoadingResults = false;
		}, err => {
		  console.log(err);
		  this.isLoadingResults = false;
		}); 
		
		
	
		
		
	}

}
