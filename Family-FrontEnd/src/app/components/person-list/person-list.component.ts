import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: [ './person-list.component.css' ]
} )
export class PersonListComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor ( private personService: PersonService, private router: Router ) { }

  ngOnInit(): void {
    this.loadPersons();
  }

  public loadPersons() {
    console.log( 'Loading person in PersonListComponent' );
    this.persons = this.personService.getAllPersons();
  }

  //detele Person
  public deletePerson( personId: number ) {
    console.log( 'Inside deletePerson with personId ' + personId );
    this.personService.deletePerson( personId ).subscribe(
      response => {
        console.log( response );
        this.loadPersons();
      },
      error => console.log( error ) );
  }

  //update Person
  public updatePerson( personId: number ) {
    this.router.navigate( [ 'update', personId ] );
  }

  //details Person
  public detailsPerson( personId: number ) {
    this.router.navigate( [ 'details', personId ] );
  }

}
