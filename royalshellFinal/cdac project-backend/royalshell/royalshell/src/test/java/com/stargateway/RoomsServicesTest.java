package com.stargateway;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.royalshell.dtos.RoomsCategoryDto;
import com.royalshell.dtos.RoomsDto;
import com.royalshell.entities.RoomCategory;
import com.royalshell.entities.Rooms;
import com.royalshell.services.RoomCategoryServices;
import com.royalshell.services.RoomServices;

@SpringBootTest
public class RoomsServicesTest {
	
	@Autowired
	private RoomServices roomServices;
	
	@Autowired
	private RoomCategoryServices roomCategoryServices;
	

//	@Transactional
//	@Test
//	void findRoomById() {
//		Rooms room = roomServices.findRoomById(3);
//		System.out.println(room);
//		room.getFacility().stream().forEach(System.out::println);
//		
//	}
	
//	@Transactional
//	@Test
//	void findAllRoom() {
//		List<RoomsDto> room = roomServices.findAllRooms();
//		System.out.println(room);
//		
//		
//	}
	
//	@Transactional
//	@Test
//	void findRoomCount() {
//		int count = roomServices.findRoomsCount();
//		System.out.println(count+" in tets");
//		
//		
//	}
	
//	@Transactional
//	@Test
//	void findRoomCategoryById() {
//		RoomsCategoryDto roomCategoryDto = roomCategoryServices.findRoomsCategoryById(1);
//		System.out.println(roomCategoryDto);
//		//roomCategory.getRoomsList().stream().forEach(System.out::println);
//		
//	}
	
//	@Transactional
//	@Test
//	void editRoomCategoryById() {
//		
//			RoomsCategoryDto dto = roomCategoryServices.findRoomsCategoryById(4);
//			dto.setTitle("triple room");
//			Map<String, Object> result = roomCategoryServices.editRoomsCategory(dto.getCategoryId(), dto);
//			System.out.println(result);
//			
//		//roomCategory.getRoomsList().stream().forEach(System.out::println);
//		
//	}
	
//	@Transactional
//	@Test
//	void findAvailabeRoomByBookingDates() {
//		System.out.println(roomServices.availableRoom()); 
//		//roomCategory.getRoomsList().stream().forEach(System.out::println);
//		
//	}
	
//	@Transactional
//	@Test
//	void addRoom() {
//		
//		List<Integer> list = new ArrayList<Integer>();
//		list.add(1);
//		list.add(2);
//		list.add(4);
//		
//		RoomsDto newRoom = new RoomsDto();
//		newRoom.setAdultCount(2);
//		newRoom.setBedCount(2);
//		newRoom.setCategoryId(3);
//		newRoom.setChildCount(1);
//		newRoom.setDescription("good room");
//		newRoom.setFacilityIdList(list);
//		newRoom.setPrice(10000);
//
//		System.out.println(roomServices.addRoom(newRoom)); 
//
//	}
}
