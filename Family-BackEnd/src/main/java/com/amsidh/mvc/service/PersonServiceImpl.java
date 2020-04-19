package com.amsidh.mvc.service;

import com.amsidh.mvc.entity.Person;
import com.amsidh.mvc.repository.PersonRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@AllArgsConstructor
@Transactional
public class PersonServiceImpl implements PersonService {

	private static final String NO_PERSON_FOUND_WITH_ID = "No Person found with id ";
	private final PersonRepository personRepository;

	@Override
	public void deletePersonByPersonId(Long personId) {
		personRepository.deleteById(personId);

	}

	@Override
	public Person savePerson(Person person) {
		return personRepository.saveAndFlush(person);
	}

	@Override
	public Person updatePerson(Long personId, Person person) {
		Person existingPerson = getPerson(personId);
		existingPerson.setPersonName(person.getPersonName());
		existingPerson.setPersonAddress(person.getPersonAddress());
		personRepository.flush();
		return existingPerson;
	}

	@Override
	public Person getPerson(Long personId) {
		return personRepository.findById(personId)
				.orElseThrow(() -> new RuntimeException(NO_PERSON_FOUND_WITH_ID + personId));
	}

	@Override
	public List<Person> allPersons() {
		return personRepository.findAll();
	}

}
