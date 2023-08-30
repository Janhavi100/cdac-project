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
import com.royalshell.dtos.RoomsCategoryDto;
import com.royalshell.services.FacilityServices;
import com.royalshell.services.RoomCategoryServices;
import com.royalshell.utils.Response;

@CrossOrigin(origins = "*")
@RestController	
public class RoomsCategoryController {

	@Autowired
	private RoomCategoryServices roomCategoryServices;

	@GetMapping("/roomCategory/{id}")
	public ResponseEntity<?> roomCategoryById(@PathVariable("id") int roomCategoryId) {
		RoomsCategoryDto roomsCategoryDto = roomCategoryServices.findRoomsCategoryById(roomCategoryId);
		if(roomsCategoryDto==null) {
			return Response.status(HttpStatus.NOT_FOUND);
		}
		return Response.success(roomsCategoryDto);
	}
	
	@GetMapping("/roomCategory/allroomCategory")
	public ResponseEntity<?> allRoomCategory() {
		List<RoomsCategoryDto> roomsCategoryDto = roomCategoryServices.findAllRoomsCategory();
		if(roomsCategoryDto==null) {
			return Response.status(HttpStatus.NOT_FOUND);
		}
		return Response.success(roomsCategoryDto);
	}

	@PostMapping("/roomCategory/add")
	public ResponseEntity<?> addRoomCategory(@RequestBody RoomsCategoryDto roomsCategoryDto) {
		Map<String, Object> result = roomCategoryServices.addRoomsCategory(roomsCategoryDto);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@PostMapping("/roomCategory/edit/{id}")
	public ResponseEntity<?> editRoomCategory(@PathVariable("id") int id, @RequestBody RoomsCategoryDto roomsCategoryDto) {
		Map<String, Object> result = roomCategoryServices.editRoomsCategory(id, roomsCategoryDto);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/roomCategory/delete/{id}")
	public ResponseEntity<?> deleteRoomCategory(@PathVariable("id") int id) {
		Map<String, Object> result = roomCategoryServices.deleteRoomsCategory(id);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.NOT_FOUND);
	}
}
