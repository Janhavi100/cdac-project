package com.royalshell.dtos;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.royalshell.entities.Booking;
import com.royalshell.entities.Facility;
import com.royalshell.entities.Idproof;
import com.royalshell.entities.RoomCategory;
import com.royalshell.entities.Rooms;
import com.royalshell.entities.User;
import com.royalshell.services.FacilityServices;
import com.royalshell.services.RoomServices;

@Component
public class DtoEntityConverter {
	
	@Autowired
	private ModelMapper modelMapper;




	public UserDto UserEntityToUserDto(User entity) {
	UserDto dto = new UserDto();
	dto.setUserId(entity.getUserId());
	dto.setFirstName(entity.getFirstName());
	dto.setLastName(entity.getLastName());
	dto.setEmail(entity.getEmail());
	dto.setPassword(entity.getPassword());
	dto.setRole(entity.getRole());
	dto.setIdproofs(entity.getIdproof());
	dto.setGender(entity.getGender());
	dto.setMobile(entity.getMobile());
	dto.setAddress(entity.getAddress());
	dto.setCity(entity.getCity());
	dto.setState(entity.getState());
	dto.setZipcode(entity.getZipcode());
	dto.setCreatedTimestamp(entity.getCreatedTimestamp());
	return dto;
}
	
	public User UserDtoToUserEntity(UserDto dto) {
		User entity = new User();
		entity.setUserId(dto.getUserId());
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		entity.setIdproof(dto.getIdproofs());
		entity.setGender(dto.getGender());
		entity.setRole(dto.getRole());
		entity.setMobile(dto.getMobile());
		entity.setAddress(dto.getAddress());
		entity.setCity(dto.getCity());
		entity.setState(dto.getState());
		entity.setZipcode(dto.getZipcode());
		return entity;
	}
	

	
	public FacilityDto FacilityEntityToFacilityDto(Facility entity) {
		FacilityDto dto = new FacilityDto();
		dto = modelMapper.map(entity, FacilityDto.class);
		return dto;
		
	}
	
	public Facility FacilityDtoToFacilityEntity(FacilityDto dto) {
		Facility entity = new Facility();
		entity = modelMapper.map(dto, Facility.class);
		return entity;
		
	}
	
	public RoomsCategoryDto RoomsCategoryEntityToRoomsCategoryDto(RoomCategory entity) {
		RoomsCategoryDto dto = new RoomsCategoryDto();
		dto = modelMapper.map(entity, RoomsCategoryDto.class);
		return dto;
		
	}
	
	public RoomCategory RoomsCategoryDtoToRoomsCategoryEntity(RoomsCategoryDto dto) {
		RoomCategory entity = new RoomCategory();
		entity.setCategoryId(dto.getCategoryId());
		entity.setDescription(dto.getDescription());
		entity.setTitle(dto.getTitle());
		return entity;
		
	}
	
	public RoomsDto RoomsEntityToRoomsDto(Rooms entity) {
		RoomsDto dto = new RoomsDto();
		dto = modelMapper.map(entity, RoomsDto.class);
		return dto;
	}
	
	public Rooms RoomsDtoToRoomsEntity(RoomsDto dto) {
		Rooms entity = new Rooms();
		entity.setRoomId(dto.getRoomId());
		entity.setCategoryId(dto.getCategoryId());
		entity.setAdultCount(dto.getAdultCount());
		entity.setChildCount(dto.getChildCount());
		entity.setPrice(dto.getPrice());
		entity.setImage(dto.getImage());
		entity.setDescription(dto.getDescription());
		entity.setBedCount(dto.getBedCount());
		return entity;	
	}
	
	public IdproofDto IdproofEntityToIdproofDto(Idproof entity) {
		IdproofDto dto = new IdproofDto();
		dto = modelMapper.map(entity, IdproofDto.class);
		return dto;
	}
	
	public Idproof IdproofDtoToIdproofEntity(IdproofDto dto) {
		Idproof entity = new Idproof();
		entity = modelMapper.map(dto, Idproof.class);
		return entity;	
	}
	
	public BookingDto bookingEntityTobookingDto(Booking entity) {
		BookingDto dto = new BookingDto();
		dto = modelMapper.map(entity, BookingDto.class);
		return dto;
	}
	
	public Booking bookingDtoTobookingEntity(BookingDto dto) {
		Booking entity = new Booking();
		entity.setBookingId(dto.getBookingId());
		entity.setUserId(dto.getUserId());
		entity.setBookingDate(dto.getBookingDate());
		entity.setCheckIn(dto.getCheckIn());
		entity.setCheckOut(dto.getCheckOut());
		entity.setRemark(dto.getRemark());
		entity.setStatus(dto.getStatus());
		entity.setPayment(dto.getPayment());
	    entity.setRoomId(dto.getRoomId());
	    return entity;	
	}
	
	
	
	

}
