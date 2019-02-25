import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DataService } from '../services/data.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  messagePost = {
    title: '',
	  subject: '',
    body: '',
    position: 0,
    date_posted: new Date()
  };

  constructor(
    public dataService: DataService
  ) {
  }

  

  onSubmit(): void {
    this.messagePost.position = this.dataService.dataLength();
  }


  ngOnInit() {
  }

}
