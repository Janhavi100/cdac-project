package com.stargateway;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.royalshell.entities.ContactUs;
import com.royalshell.services.ContactUsServices;
import com.royalshell.services.UserServices;

@SpringBootTest
class StargatewayApplicationTests {

//	@Test
//	void contextLoads() {
//	}
	
	@Autowired
	private ContactUsServices contactUsServices;
	

	
	@Transactional
	@Test
	void findByUserId() {
		ContactUs contactUs = contactUsServices.findContactUs();

		System.out.println(contactUs);
	}
	

}
