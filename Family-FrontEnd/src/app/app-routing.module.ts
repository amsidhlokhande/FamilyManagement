import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'persons', pathMatch: 'full' },
  { path: 'persons', component: PersonListComponent },
  { path: 'update/:personId', component: UpdatePersonComponent },
  { path: 'details/:personId', component: PersonDetailsComponent },
  { path: 'add', component: CreatePersonComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
