import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person';

@Component( {
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: [ './person-details.component.css' ]
} )
export class PersonDetailsComponent implements OnInit {
  person: Observable<Person>;

  constructor ( private personService: PersonService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      let personId = parseInt( params.get( 'personId' ) );
      this.person = this.personService.getPersonByPersonId( personId );
    } );
  }

  list() {
    this.router.navigate( [ '/persons' ] );
  }

}
