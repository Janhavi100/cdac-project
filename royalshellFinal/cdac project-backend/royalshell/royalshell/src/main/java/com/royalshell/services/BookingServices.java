package com.royalshell.services;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.royalshell.daos.IBookingDao;
import com.royalshell.dtos.BookingDto;
import com.royalshell.dtos.CheckDto;
import com.royalshell.dtos.DtoEntityConverter;
import com.royalshell.dtos.FacilityDto;
import com.royalshell.dtos.RoomsDto;
import com.royalshell.dtos.UserDto;
import com.royalshell.entities.Booking;
import com.royalshell.entities.Facility;
import com.royalshell.entities.Rooms;
import com.royalshell.entities.User;

@Transactional
@Service
public class BookingServices {

	@Autowired
	private IBookingDao bookingDao;
	@Autowired
	private UserServices userServices;
	@Autowired
	private RoomServices roomServices;

	@Autowired
	private DtoEntityConverter converter;

	public BookingDto findBookingById(int id) {
		BookingDto bookingDto = null;

		try {
			bookingDto = converter.bookingEntityTobookingDto(bookingDao.findByBookingId(id));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bookingDto;
	}

	public List<BookingDto> findAllBooking() {
		List<Booking> bookingList = null;
		List<BookingDto> bookingDtoList = null;
		try {
			bookingList = bookingDao.findAll();
			bookingDtoList = bookingList.stream().map(Booking -> converter.bookingEntityTobookingDto(Booking))
					.collect(Collectors.toList());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bookingDtoList;
	}

//	public List<BookingDto> findAllBookingByUserId(int id){
//		UserDto userDto = userServices.findUserById(id);
//		List<Booking> userBookingList  = userDto.getBookingList();
//		return userBookingList.stream().map(Booking -> converter.bookingEntityTobookingDto(Booking))
//				.collect(Collectors.toList());
//	}

	public List<BookingDto> findAllBookingByUserId(int id) {
		List<Booking> userBookingList = null;
		List<BookingDto> userBookingDtoList = null;
		try {
			userBookingList = bookingDao.findByUserId(id);
			userBookingDtoList = userBookingList.stream().map(Booking -> converter.bookingEntityTobookingDto(Booking))
					.collect(Collectors.toList());

		} catch (Exception e) {
			e.printStackTrace();
		}

		return userBookingDtoList;
	}

	public Map<String, Object> addBooking(BookingDto bookingDto) {
		if(bookingDto!=null) {
			Booking bookingToBeSaved = null;
			Booking bookingSaved = null;
			try {
				 bookingToBeSaved = converter.bookingDtoTobookingEntity(bookingDto);
				 bookingSaved = bookingDao.save(bookingToBeSaved);
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			//System.out.println(bookingSaved);
			return Collections.singletonMap("addedRows", 1);
		}
		return Collections.singletonMap("addedRows", 0);
	}

	public List<Integer> findAvailabeRoomsIdsByFromAndToDate(Date from, Date to) {
		List<Integer> bookedRoomsIdsList = null;
		
		try {
			 bookedRoomsIdsList = bookingDao.findAvailabeRoomsIdsByFromAndToDate(from, to);
		} catch (Exception e) {
			e.printStackTrace();
		}

		return bookedRoomsIdsList;
	}

	public Map<String, Object> deleteBooking(int id) {
		if (bookingDao.existsById(id)) {
			bookingDao.deleteById(id);
			return Collections.singletonMap("deletedRows", 1);
		}
		return Collections.singletonMap("deletedRows", 0);
	}

	public List<RoomsDto> findAvailabeRoomsByFromAndToDateTest(CheckDto checkDto) {
		List<Integer> listInt = findAvailabeRoomsIdsByFromAndToDate(checkDto.getCheckIn(), checkDto.getCheckOut());
		List<RoomsDto> roomsList = roomServices.availableRoom(listInt);
		return roomsList;
	}

	public List<BookingDto> findAllBookingByDate(CheckDto checkDto) {
		List<Integer> listInt = bookingDao.findBookingByFromAndToDate(checkDto.getCheckIn(), checkDto.getCheckOut());
		List<BookingDto> bookingList = availableBooking(listInt);
		return bookingList;
	}

	public List<BookingDto> availableBooking(List<Integer> bookingIds) {

		List<Booking> availableBookingList = bookingDao.findBookingByIds(bookingIds);
		List<BookingDto> availableBookingDtoList = availableBookingList.stream()
				.map(Booking -> converter.bookingEntityTobookingDto(Booking)).collect(Collectors.toList());
		return availableBookingDtoList;
	}

	public int findBookingCount() {
		int bookingCount = bookingDao.findBookingCount();
		System.out.println(bookingCount);
		return bookingCount;
	}
}
