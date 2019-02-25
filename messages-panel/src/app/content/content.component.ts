import { Component } from '@angular/core';
import { MessagesDialogComponent } from '../messages-dialog/messages-dialog.component';
import { MatDialog } from '@angular/material';

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

  constructor(public dialog: MatDialog, private dataService: DataService) {
  }
  
   displayedColumns = ['title', 'date_posted',  'subject', 'delete'];
   dataSource = new MessageDataSource(this.dataService);
   
   openDialog(): void {
    let dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '600px',
      data: 'Cadastrar Mensagem'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addMessage(result.data);
      this.dataSource = new MessageDataSource(this.dataService);
    });
  }
  

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
   OnInit(){}
}
