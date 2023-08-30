package com.royalshell.controllers;

import java.util.List;
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

import com.royalshell.dtos.FacilityDto;
import com.royalshell.dtos.IdproofDto;
import com.royalshell.entities.Facility;
import com.royalshell.services.FacilityServices;
import com.royalshell.utils.Response;

@CrossOrigin(origins = "*")
@RestController	
public class FacilityController {

	@Autowired
	private FacilityServices facilityServices;

	@GetMapping("/facility/{id}")
	public ResponseEntity<?> facilityById(@PathVariable("id") int facilityId) {
		//FacilityDto facilityDto  = facilityServices.findFacilityById(facilityId);
		FacilityDto facilityDto  = facilityServices.findFacilityById(facilityId);
		if(facilityDto==null) {
			return Response.status(HttpStatus.NOT_FOUND);
		}
		return Response.success(facilityDto);
	}
	
	@GetMapping("/facility/allfacility")
	public ResponseEntity<?> allFacility() {
		List<FacilityDto> facilityList = facilityServices.findAllFacility();
		if(facilityList==null) {
			return Response.status(HttpStatus.NOT_FOUND);
		}
		return Response.success(facilityList);
	}

	@PostMapping("/facility/add")
	public ResponseEntity<?> addFacility(@RequestBody FacilityDto facilityDto) {
		Map<String, Object> result = facilityServices.addFacility(facilityDto);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@PostMapping("/facility/edit/{id}")
	public ResponseEntity<?> editFacility(@PathVariable("id") int id, @RequestBody FacilityDto facilityDto) {
		Map<String, Object> result = facilityServices.editFacility(id, facilityDto);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/facility/delete/{id}")
	public ResponseEntity<?> deleteFacility(@PathVariable("id") int id) {
		Map<String, Object> result = facilityServices.deleteFacility(id);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.NOT_FOUND);
	}
}
