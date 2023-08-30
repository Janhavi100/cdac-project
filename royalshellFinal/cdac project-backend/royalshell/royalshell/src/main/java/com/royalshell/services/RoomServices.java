package com.royalshell.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.royalshell.daos.IRoomsCategoryDao;
import com.royalshell.daos.IRoomsDao;
import com.royalshell.dtos.DtoEntityConverter;
import com.royalshell.dtos.FacilityDto;
import com.royalshell.dtos.RoomsCategoryDto;
import com.royalshell.dtos.RoomsDto;
import com.royalshell.entities.Facility;
import com.royalshell.entities.RoomCategory;
import com.royalshell.entities.Rooms;

@Transactional
@Service
public class RoomServices {

	@Autowired
	private IRoomsDao roomsDao;
	@Autowired
	private FacilityServices facilityService;
	@Autowired
	private RoomCategoryServices roomCategoryServices;
	@Autowired
	private DtoEntityConverter converter;

	public RoomsDto findRoomById(int id) {
		Rooms room =null;
		RoomsDto roomDto=null;
		try {
			 room = roomsDao.findByRoomId(id);
			 roomDto= converter.RoomsEntityToRoomsDto(room);
		}catch (Exception e) {
			e.printStackTrace();
		}
		return roomDto;
	}

	public List<RoomsDto> findAllRooms() {
		List<Rooms> roomsList = null;
		List<RoomsDto> roomsDtoList=null;
		try {
			roomsList = roomsDao.findAll();
		roomsDtoList = roomsList.stream().map(Rooms -> converter.RoomsEntityToRoomsDto(Rooms))
				.collect(Collectors.toList());
		}catch (Exception e) {
			e.printStackTrace();
		}
		if(roomsDtoList==null) {
			return null;
		}
		for (RoomsDto roomsDto : roomsDtoList) {
			RoomsCategoryDto roomsCategory = roomCategoryServices.findRoomsCategoryById(roomsDto.getCategoryId());
			roomsDto.setRoomCategory(roomsCategory);
		}
		return roomsDtoList;
	}

	public Map<String, Object> addRoom(RoomsDto roomsDto) {

		if(roomsDto!=null) {
			Rooms roomToBeSaved = null;

			List<Integer> facilityIdList = roomsDto.getFacilityIdList();
			List<FacilityDto> facilityDtoListToBeAdded = new ArrayList<>();
			for (Integer integer : facilityIdList) {
				facilityDtoListToBeAdded.add(facilityService.findFacilityById(integer));
			}
			List<Facility> facilityList = facilityDtoListToBeAdded.stream()
					.map(FacilityDto -> converter.FacilityDtoToFacilityEntity(FacilityDto)).collect(Collectors.toList());
			Rooms roomSaved =null;
			try {
				roomToBeSaved = converter.RoomsDtoToRoomsEntity(roomsDto);
				roomToBeSaved.setFacility(facilityList);
			roomSaved = roomsDao.save(roomToBeSaved);
			}catch (Exception e) {
				e.printStackTrace();
			}
			//System.out.println(roomSaved);
			return Collections.singletonMap("addedRows", 1);
		}
		return Collections.singletonMap("addedRows", 0);
	}

	public Map<String, Object> editRoom(int id, RoomsDto roomsDto) {
		if (roomsDao.existsById(id)) {
			
			Rooms roomToBeUpdated =null;

			List<Integer> facilityIdList = roomsDto.getFacilityIdList();
			List<FacilityDto> facilityDtoListToBeAdded = new ArrayList<>();
			for (Integer integer : facilityIdList) {
				facilityDtoListToBeAdded.add(facilityService.findFacilityById(integer));
			}
			List<Facility> facilityList = facilityDtoListToBeAdded.stream()
					.map(FacilityDto -> converter.FacilityDtoToFacilityEntity(FacilityDto)).collect(Collectors.toList());
			
			
			try {
				roomToBeUpdated = converter.RoomsDtoToRoomsEntity(roomsDto);
				roomToBeUpdated.setFacility(facilityList);
			Rooms roomEdited = roomsDao.save(roomToBeUpdated);
			}catch (Exception e) {
				e.printStackTrace();
			}

			return Collections.singletonMap("updatedRows", 1);
		}
		return Collections.singletonMap("updatedRows", 0);
	}

	public Map<String, Object> deleteRoom(int id) {
		if (roomsDao.existsById(id)) {
			roomsDao.deleteById(id);
			return Collections.singletonMap("deletedRows", 1);
		}
		return Collections.singletonMap("deletedRows", 0);
	}

//	public List<RoomsDto> availableRoom(List<Integer> bookedRoomIds) {
//		if (bookedRoomIds!= null) {
//			List<Rooms> availableRoomsList = roomsDao.findRoomsByIds(bookedRoomIds);
//			List<RoomsDto> availableRoomsDtoList = availableRoomsList.stream().map(Rooms -> converter.RoomsEntityToRoomsDto(Rooms)).collect(Collectors.toList());
//			return availableRoomsDtoList;
//		}
//		return findAllRooms();
//	}

	public List<RoomsDto> availableRoom(List<Integer> bookedRoomIds) {
		if (bookedRoomIds.isEmpty()) {
			return findAllRooms();
		}
		List<Rooms> availableRoomsList = roomsDao.findRoomsByIds(bookedRoomIds);
//	List<RoomsDto> availableRoomsDtoList = availableRoomsList.stream().map(Rooms -> converter.RoomsEntityToRoomsDto(Rooms)).collect(Collectors.toList());
		List<RoomsDto> availableRoomsDtoList = new ArrayList<RoomsDto>();
		for (Rooms rooms : availableRoomsList) {
			RoomsDto dto = converter.RoomsEntityToRoomsDto(rooms);
			RoomsCategoryDto categoryDto = roomCategoryServices.findRoomsCategoryById(dto.getCategoryId());
			dto.setRoomCategory(categoryDto);
			availableRoomsDtoList.add(dto);
		}
		return availableRoomsDtoList;
	}

	public int findRoomsCount() {
		int roomsCount = roomsDao.findRoomsCount();
		System.out.println(roomsCount);
		return roomsCount;
	}

}
