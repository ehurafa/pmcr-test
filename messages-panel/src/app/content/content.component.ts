import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Message } from '../Message';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private api: ApiService) {
  }
  
    
	// data: Message[] = [];
	private data: any[];

	isLoadingResults = false;
  
   displayedColumns = ['title', 'hour',  'subject', 'body' ,'delete'];
   //dataSource = new MessageDataSource(this.dataService);
   
   /*openDialog(): void {
    let dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '600px',
      data: 'Cadastrar Mensagem'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addMessage(result.data);
      this.dataSource = new MessageDataSource(this.dataService);
    });
  }   */
  
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


/*
export class MessageDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Message[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
   OnInit(){}
}
*/