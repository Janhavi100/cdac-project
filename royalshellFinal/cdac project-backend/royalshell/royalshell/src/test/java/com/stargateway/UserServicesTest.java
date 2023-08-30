package com.stargateway;

import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import com.royalshell.dtos.Credentials;
import com.royalshell.dtos.UserDto;
import com.royalshell.entities.Idproof;
import com.royalshell.entities.User;
import com.royalshell.services.UserServices;

@SpringBootTest
public class UserServicesTest {

	@Autowired
	private UserServices userServices;
	

	
//	@Transactional
//	@Test
//	void findByUserId() {
//		User u = userServices.findUserById(3);
//
//		System.out.println(u);
//		u.getBookingList().stream().forEach(System.out::println);
//	}
	
	
//	@Transactional
//	@Test
//	void saveUser() {
//		UserDto newUser = new UserDto();
//		newUser.setFirstName("sham");
//		newUser.setLastName("mehara");
//		newUser.setEmail("aham@test.com");
//		newUser.setPassword("1234");
//
//		UserDto u = userServices.saveUser(newUser);
//		System.out.println(u);
//		//u.getBookingList().stream().forEach(System.out::println);
//	}
	
//	@Transactional
//	@Test
//	@Rollback(false)
//	void updateUser() {
//		
//		UserDto newUser = new UserDto();
//		newUser.setUserId(6);
//		newUser.setFirstName("sham");
//		newUser.setLastName("mehara");
//		newUser.setEmail("aham@test.com");
//		newUser.setPassword("1234");
//		newUser.setIdproofs(1);
//		newUser.setCity("delhi");
////		System.out.println(newUser);
//		//UserDto u = userServices.upadateUser(newUser);
//		
//		System.out.println(userServices.upadateUser(newUser));
//		//u.getBookingList().stream().forEach(System.out::println);
//	}
	
//	@Transactional
//	@Test
//	void findByUserId() {
//		Credentials cred = new Credentials("sandy@test.com", "1234");
//		
//		
//		UserDto u = userServices.findUserByEmailAndPassword(cred);
//		System.out.println(u);
//		//u.getBookingList().stream().forEach(System.out::println);
//	}
	
	
	@Test
	void findAll() {
		List<UserDto> list = userServices.findAllUsers();
		for (UserDto user : list) {
			System.out.println(user);
		}
	}
	
	
//	@Transactional
//	@Test
//	void updateUserRole() {
//		
//		UserDto newUser = new UserDto();
//		newUser.setUserId(6);
//		newUser.setRole("admin");
//		//System.out.println(newUser);
//		//UserDto u = userServices.upadateUser(newUser);
//		
//		System.out.println(userServices.upadateUserRole(newUser));
//		//u.getBookingList().stream().forEach(System.out::println);
//	}
}
