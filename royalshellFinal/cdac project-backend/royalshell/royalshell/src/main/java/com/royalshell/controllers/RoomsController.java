package com.royalshell.controllers;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

import com.royalshell.dtos.DtoEntityConverter;
import com.royalshell.dtos.FacilityDto;
import com.royalshell.dtos.RoomsCategoryDto;
import com.royalshell.dtos.RoomsDto;
import com.royalshell.entities.Rooms;
import com.royalshell.services.RoomCategoryServices;
import com.royalshell.services.RoomServices;
import com.royalshell.utils.Response;
@CrossOrigin(origins = "*")
@RestController	
public class RoomsController {
	
	@Autowired
	private RoomCategoryServices roomCategoryServices;
	
	@Autowired
	private RoomServices roomsServices;
	
	@Autowired
	private DtoEntityConverter converter;
	
	@GetMapping("/rooms/{id}")
	public ResponseEntity<?> roomCategoryById(@PathVariable("id") int roomId) {
		RoomsDto roomsDto = roomsServices.findRoomById(roomId);
		if(roomsDto==null) {
			return Response.status(HttpStatus.NOT_FOUND);
		}
		return Response.success(roomsDto);
	}

	@GetMapping("/rooms/roomCategory/{id}")
	public ResponseEntity<?> roomsByCategoryById(@PathVariable("id") int roomCategoryId) {
		RoomsCategoryDto roomsCategoryDto  = roomCategoryServices.findRoomsCategoryById(roomCategoryId);
		List<Rooms> roomsList = roomsCategoryDto.getRoomsList();
		List<RoomsDto> roomsDtoList = roomsList.stream().map(Rooms -> converter.RoomsEntityToRoomsDto(Rooms)).collect(Collectors.toList());
		return Response.success(roomsDtoList);
	}
		
	@GetMapping("/rooms/allrooms")
	public ResponseEntity<?> allRooms() {
		List<RoomsDto> roomsList = roomsServices.findAllRooms();
		if(roomsList==null) {
			return Response.status(HttpStatus.NOT_FOUND);
		}
		return Response.success(roomsList);
	}

	@PostMapping("/rooms/add")
	public ResponseEntity<?> addRoom(@RequestBody RoomsDto roomsDto) {
		Map<String, Object> result = roomsServices.addRoom(roomsDto);
		if(result.containsValue(1)) {
			return Response.success(result);
		}
		return Response.status(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@PostMapping("/rooms/edit/{id}")
	public ResponseEntity<?> editRoom(@PathVariable("id") int id, @RequestBody RoomsDto roomsDto) {
		Map<String, Object> result = roomsServices.editRoom(id, roomsDto);
		if(result.containsValue(1)) {
			return Response.success(result);
			
		}
		return Response.status(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/rooms/delete/{id}")
	public ResponseEntity<?> deleteRoom(@PathVariable("id") int id) {
		Map<String, Object> result = roomsServices.deleteRoom(id);
		if(result.containsValue(1)) {
			return Response.success(result);
			
		}
		return Response.status(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/rooms/roomscount")
	public ResponseEntity<?> roomsCount() {
		int roomsCount = roomsServices.findRoomsCount();
		return Response.success(roomsCount);
	}
}
