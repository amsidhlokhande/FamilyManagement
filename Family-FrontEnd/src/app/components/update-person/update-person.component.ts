import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person';

@Component( {
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: [ './update-person.component.css' ]
} )
export class UpdatePersonComponent implements OnInit {

  personForm: FormGroup;
  formSubmitted: boolean = false;

  constructor ( private personService: PersonService, private formBuilder: FormBuilder, private router: Router, private activateRoute: ActivatedRoute ) {
    this.personForm = this.formBuilder.group( {
      personId: new FormControl( '', Validators.required ),
      personName: new FormControl( '', Validators.compose( [ Validators.required, Validators.minLength( 3 ) ] ) ),
      personAddress: new FormControl( '' )
    } );
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe( params => {
      let personId = parseInt( params.get( 'personId' ) );
      this.personByPersonId( personId ).subscribe( personData => {
        this.personForm.setValue( {
          personId: personData.personId,
          personName: personData.personName,
          personAddress: personData.personAddress
        } )
      }, error => {
        console.log( error );
      } )
    } );

  }

  public updatePerson() {
    this.personService.updatePerson( this.personForm.value ).subscribe(
      data => {
        console.log( data );
        this.personsList();
      },
      error => {
        console.log( error );
      }
    );
  }

  public submitPerson() {
    this.formSubmitted = true;
    this.updatePerson();
  }
  private personByPersonId( personId: number ): Observable<Person> {
    return this.personService.getPersonByPersonId( personId );
  }

  private personsList() {
    this.router.navigate( [ '/persons' ] );
  }

  backToPersonList() {
    this.personsList();
  }
}
