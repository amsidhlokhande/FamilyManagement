package com.amsidh.mvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class FamilyManagementApplication {

	public static void main(String[] args) {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		System.out.println("password :"+bCryptPasswordEncoder.encode("password"));
		System.out.println("admin :"+bCryptPasswordEncoder.encode("admin"));
		
		SpringApplication.run(FamilyManagementApplication.class, args);
	}

}
