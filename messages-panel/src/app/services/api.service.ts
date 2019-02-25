import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Message } from '../Message';
import 'rxjs/add/operator/map'


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


 


// export type Item = { id: number, title: string, subject, string, hour: string, body: string };


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getJsonData(): Promise<any[]>{
    return this.http.get<any[]>('http://localhost:4200/assets/messages.json').toPromise();
  }
  
   url = 'http://localhost:3000';

  constructor(private http: HttpClient) {

  }
  
  private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {

		// TODO: send the error to remote logging infrastructure
		console.error(error); // log to console instead

		// Let the app keep running by returning an empty result.
		return of(result as T);
	  };
	}
	
	getAll(): Observable<any> {
    return this.http.get(this.url + '?_sort=id&_order=desc')
      .map(response => response.json());
  }
	
	
	getMessages (): Observable<Message[]> {
		/* return this.http.get<Message[]>(apiUrl)
		//.map(res => res.json())
		.pipe(
		  tap(heroes => console.log('fetched messages')),
		  catchError(console.log('error');this.handleError('getMessages', []))
		);  
		
		
		
		return this.http
		  .get("api/messages.json")
		  .map(data => data.json() as Array<Item>)
		  .subscribe(data => {
			this.items = data;
			console.log(data);
		  });  */
		  
		 return this.http.get("api/messages.json")
			.subscribe((success) => {
			  console.log('>> success.json()')  ;       
			});
		  
	}
	
	getMessage(id: number): Observable<Message> {
	  const url = `${apiUrl}/${id}`;
	  return this.http.get<Message>(url).pipe(
		tap(_ => console.log(`fetched message id=${id}`)),
		catchError(this.handleError<Message>(`getMessage id=${id}`))
	  );
	}
	
	addMessage (message): Observable<Message> {
	return this.http.post<Message>(apiUrl, message, httpOptions).pipe(
		tap((message: Message) => console.log(`added message w/ id=${message.id}`)),
		catchError(this.handleError<Message>('addMesssage'))
	  );
	}
	
	updateMessage (id, message): Observable<any> {
	  const url = `${apiUrl}/${id}`;
	  return this.http.put(url, message, httpOptions).pipe(
		tap(_ => console.log(`updated message id=${id}`)),
		catchError(this.handleError<any>('updateMessage'))
	  );
	}
	
	deleteMessage (id): Observable<Message> {
	  const url = `${apiUrl}/${id}`;

	  return this.http.delete<Message>(url, httpOptions).pipe(
		tap(_ => console.log(`deleted message id=${id}`)),
		catchError(this.handleError<Message>('deleteMessage'))
	  );
	}


}
