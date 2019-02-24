import { Component } from '@angular/core';

import { DataService } from '../services/data.service';
import { Message } from '../Message';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private dataService: DataService) {
  }
  
   displayedColumns = ['title', 'date_posted',  'subject', 'delete'];
   dataSource = new MessageDataSource(this.dataService);
  

}



export class MessageDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Message[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
