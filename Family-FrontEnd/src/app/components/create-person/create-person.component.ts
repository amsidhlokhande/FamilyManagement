import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: [ './create-person.component.css' ]
} )
export class CreatePersonComponent implements OnInit {
  personForm: FormGroup;
  formSubmitted: boolean = false;
  message: string;

  constructor ( private personService: PersonService, private formBuilder: FormBuilder, private router: Router ) {
    console.log( 'Creating personForm!!!!' );
    this.personForm = this.formBuilder.group( {
      personId: new FormControl( '', [ Validators.required ] ),
      personName: new FormControl( '', Validators.compose( [ Validators.required, Validators.minLength( 3 ) ] ) ),
      personAddress: new FormControl( '' )
    } );
  }

  ngOnInit(): void {
    this.message = null;
    this.formSubmitted = false;
  }

  public submitPerson() {
    this.formSubmitted = true;
    this.postPerson( this.personForm.value ).subscribe(
      data => {
        console.log( data );
        this.message = 'Person saved successfully!!!';
        this.personForm.reset();
        this.loadPersons();
      }, error => console.log( error )
    );
    
  }

  private loadPersons() {
    this.router.navigate( [ '/persons' ] );
  }
  public resetForm() {
    this.personForm.reset();
    this.formSubmitted = false;
    this.message = null;
    this.loadPersons();
  }

  //Web API POST call
  private postPerson( person: Person ): Observable<Person> {
    return this.personService.savePerson( person );
  }


}
