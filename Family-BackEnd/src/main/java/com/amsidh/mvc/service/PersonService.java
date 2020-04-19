package com.amsidh.mvc.service;

import com.amsidh.mvc.entity.Person;

import java.util.List;

public interface PersonService {
	Person savePerson(Person person);

	Person getPerson(Long personId);

	Person updatePerson(Long personId, Person person);

	List<Person> allPersons();

	void deletePersonByPersonId(Long personId);
}
