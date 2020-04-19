/*
 * package com.amsidh.mvc.controller;
 * 
 * import com.amsidh.mvc.entity.Person; import org.junit.jupiter.api.Test;
 * import org.junit.runner.RunWith; import
 * org.springframework.boot.test.context.SpringBootTest; import
 * org.springframework.boot.test.context.SpringBootTest.WebEnvironment; import
 * org.springframework.boot.test.web.client.TestRestTemplate; import
 * org.springframework.boot.web.server.LocalServerPort; import
 * org.springframework.http.HttpStatus; import
 * org.springframework.http.ResponseEntity; import
 * org.springframework.test.context.junit4.SpringRunner;
 * 
 * import javax.annotation.PostConstruct; import java.io.IOException; import
 * java.net.URL;
 * 
 * import static org.junit.Assert.assertEquals; import static
 * org.junit.Assert.assertTrue;
 * 
 * @RunWith(SpringRunner.class)
 * 
 * @SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT) public class
 * PersonControllerTest {
 * 
 * TestRestTemplate restTemplate; URL base;
 * 
 * @LocalServerPort Integer port;
 * 
 * @PostConstruct public void setup() { restTemplate = new
 * TestRestTemplate("amsidhlokhande", "password"); }
 * 
 * @Test public void whenGetPersonByIdRequestString_ThenSuccess() throws
 * IllegalStateException, IOException { ResponseEntity<Person> response =
 * restTemplate.getForEntity("http://localhost:" + port + "/family/persons/1",
 * Person.class); assertEquals(HttpStatus.OK, response.getStatusCode());
 * assertTrue(response.getBody().getPersonName().equals("Amsidh"));
 * assertTrue(response.getBody().getPersonAddress().equals("Pune")); }
 * 
 * @Test public void whenGetAllPersonRequest_ThenSuccess() throws
 * IllegalStateException, IOException {
 * 
 * ResponseEntity<Person[]> response =
 * restTemplate.getForEntity("http://localhost:" + port + "/family/persons",
 * Person[].class); assertEquals(HttpStatus.OK, response.getStatusCode());
 * assertTrue(response.getBody().length > 0); }
 * 
 * }
 */