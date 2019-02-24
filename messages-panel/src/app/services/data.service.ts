import {Injectable} from '@angular/core';
import {Message} from '../Message';
import {Observable, of} from 'rxjs';

@Injectable()
export class DataService {

  ELEMENT_DATA: Message[] = [
    {position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1'},
    {position: 1, title: 'Post Two', category: 'Android Development', date_posted: new Date(), body: 'Body 2'},
    {position: 2, title: 'Post Three', category: 'IOS Development', date_posted: new Date(), body: 'Body 3'},
    {position: 3, title: 'Post Four', category: 'Android Development', date_posted: new Date(), body: 'Body 4'},
    {position: 4, title: 'Post Five', category: 'IOS Development', date_posted: new Date(), body: 'Body 5'},
    {position: 5, title: 'Post Six', category: 'Web Development', date_posted: new Date(), body: 'Body 6'},
  ];
  

  constructor() {
  }

  getData(): Observable<Message[]> {
    return of<Message[]>(this.ELEMENT_DATA);
  }

  addMessage(data) {
    this.ELEMENT_DATA.push(data);
  }

  deleteMessage(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}