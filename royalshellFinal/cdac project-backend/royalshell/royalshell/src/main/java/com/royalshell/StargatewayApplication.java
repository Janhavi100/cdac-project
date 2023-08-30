package com.royalshell;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class StargatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(StargatewayApplication.class, args);
	}

}
