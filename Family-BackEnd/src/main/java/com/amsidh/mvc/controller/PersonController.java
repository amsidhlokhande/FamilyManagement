package com.amsidh.mvc.controller;

import com.amsidh.mvc.dto.PersonDTO;
import com.amsidh.mvc.entity.Person;
import com.amsidh.mvc.service.PersonService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

//@CrossOrigin(origins = "*", allowedHeaders = "*")
//@CrossOrigin("*")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/family/persons")
@AllArgsConstructor
@Transactional
public class PersonController {
	private final PersonService personService;
	private final ModelMapper modelMapper;

	@GetMapping
	public ResponseEntity<List<PersonDTO>> getAllPersons() {
		List<PersonDTO> collect = personService.allPersons().parallelStream().map(this::convertToDto)
				.collect(Collectors.toList());
		return ResponseEntity.ok().body(collect);
	}

	@PostMapping
	public ResponseEntity<PersonDTO> addPerson(@RequestBody final PersonDTO personDTO) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(this.convertToDto(personService.savePerson(this.convertToEntity(personDTO))));
	}

	@GetMapping(value = "/{personId}")
	public ResponseEntity<PersonDTO> getPersonByPersonId(@PathVariable("personId") final Long personId) {
		return ResponseEntity.ok().body(this.convertToDto(personService.getPerson(personId)));
	}

	@PutMapping("/{personId}")
	public ResponseEntity<PersonDTO> updatePerson(@PathVariable("personId") final Long personId,
			@RequestBody final PersonDTO personDTO) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(this.convertToDto(personService.updatePerson(personId, this.convertToEntity(personDTO))));
	}

	@DeleteMapping("/{personId}")
	public ResponseEntity<String> deleteByPersonId(@PathVariable("personId") final Long personId) {
		personService.deletePersonByPersonId(personId);
		return ResponseEntity.status(HttpStatus.OK).body("Person removed successfully!!!");
	}

	private PersonDTO convertToDto(Person person) {
		return modelMapper.map(person, PersonDTO.class);
	}

	private Person convertToEntity(PersonDTO personDTO) {
		return modelMapper.map(personDTO, Person.class);
	}
}
