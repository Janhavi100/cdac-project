package com.royalshell.daos;


import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.royalshell.entities.Booking;
import com.royalshell.entities.Rooms;


public interface IBookingDao extends JpaRepository<Booking, Integer> {

		Booking findByBookingId(int id);
		
		List<Booking> findByUserId(int userid);
	
		@Query("SELECT b.roomId FROM Booking b WHERE (b.checkIn <= :from AND b.checkOut >= :from)"
				+ "OR  (b.checkIn <= :to AND b.checkOut >= :to) OR "
				+ "(:from <= b.checkIn AND :to >= b.checkOut)")
		public List<Integer> findAvailabeRoomsIdsByFromAndToDate(@Param("from") Date from,@Param("to") Date to);
		
		@Query("SELECT b.bookingId FROM Booking b WHERE (b.checkIn <= :from AND b.checkOut >= :from)"
				+ "OR  (b.checkIn <= :to AND b.checkOut >= :to) OR "
				+ "(:from <= b.checkIn AND :to >= b.checkOut)")
		public List<Integer> findBookingByFromAndToDate(@Param("from") Date from,@Param("to") Date to);
		
		@Query("SELECT b FROM Booking b WHERE b.bookingId IN (:ids)")
		public List<Booking> findBookingByIds(@Param("ids") List<Integer> ids);
		
		@Query("SELECT COUNT(b) FROM Booking b")
		public int findBookingCount();
}


//SELECT RoomID 
//FROM   BOOKING B
//       JOIN ROOMS_BOOKED RB
//           ON B.BookingID = RB.BookingID
//WHERE  (ArrivalDate <= @ArrivalDate AND DepartureDate >= @ArrivalDate) -- cases 3,5,7
//       OR (ArrivalDate < @DepartureDate AND DepartureDate >= @DepartureDate ) --cases 6,6
//       OR (@ArrivalDate <= ArrivalDate AND @DepartureDate >= ArrivalDate) --case 4


//@Query("SELECT b.roomId FROM Booking b WHERE r.roomId NOT IN (:ids)")
//public List<Rooms> findRoomsByIds(@Param("ids") List<Integer> ids);