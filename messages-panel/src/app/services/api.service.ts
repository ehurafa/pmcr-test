import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Message } from '../Message';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api/v1/messages";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {

		// TODO: send the error to remote logging infrastructure
		console.error(error); // log to console instead

		// Let the app keep running by returning an empty result.
		return of(result as T);
	  };
	}
	
	
	getMessages (): Observable<Message[]> {
	return this.http.get<Message[]>(apiUrl)
		.pipe(
		  tap(heroes => console.log('fetched messages')),
		  catchError(this.handleError('getMessages', []))
		);
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
