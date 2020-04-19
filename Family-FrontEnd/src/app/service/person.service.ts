import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { Person } from '../model/person';

@Injectable()
export class PersonService {

  private baseUrl: string = 'http://localhost:8181/family/persons';
  username: string = 'amsidhlokhande';
  password: string = 'password';
  httpHeaders = new HttpHeaders(
    {
      'Authorization': 'Basic ' + btoa( this.username + ':' + this.password ),
      'Content-Type': 'application/json'
    } );

  constructor ( private httpClient: HttpClient ) {
  }

  public getAllPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>( this.baseUrl, { headers: this.httpHeaders } );
  }

  public getPersonByPersonId( personId: number ): Observable<Person> {
    return this.httpClient.get<Person>( this.baseUrl + '/' + personId, { headers: this.httpHeaders } );
  }

  public savePerson( person: Person ): Observable<Person> {
    return this.httpClient.post<Person>( this.baseUrl, person, { headers: this.httpHeaders } );
  }

  public updatePerson( person: Person ): Observable<void> {
    return this.httpClient.put<void>( this.baseUrl + '/' + person.personId, person, { headers: this.httpHeaders } );
  }

  public deletePerson( personId: number ): Observable<string> {
    return this.httpClient.delete<string>( this.baseUrl + '/' + personId, { headers: this.httpHeaders, responseType: 'text' as 'json' } );
  }

}
