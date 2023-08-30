package com.royalshell.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.royalshell.entities.ContactUs;
import com.royalshell.services.ContactUsServices;
import com.royalshell.utils.Response;

@CrossOrigin(origins = "*")
@RestController	
public class ContactUsController {

	@Autowired
	private ContactUsServices contactUsServices;

	@GetMapping("/contactus")
	public ResponseEntity<?> allContactUs() {
		ContactUs contactUs = contactUsServices.findContactUs();
		if(contactUs==null) {
			return Response.status(HttpStatus.NOT_FOUND);
		}
		return Response.success(contactUs);
	}

	@PostMapping("/contactus/add")
	public ResponseEntity<?> addContactUs(@RequestBody ContactUs contactUs) {
		Map<String, Object> result = contactUsServices.addContactUs(contactUs);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/contactus/edit/{id}")
	public ResponseEntity<?> editContactUs(@PathVariable("id") int id,@RequestBody ContactUs contactUs) {
		Map<String, Object> result = contactUsServices.editContactUs(id,contactUs);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/contactus/delete/{id}")
	public ResponseEntity<?> deleteContactUs(@PathVariable("id") int id) {
		Map<String, Object> result = contactUsServices.deleteContactUs(id);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.NOT_FOUND);
	}
}
