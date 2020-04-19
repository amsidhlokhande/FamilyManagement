package com.amsidh.mvc.repository;

import com.amsidh.mvc.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

}
