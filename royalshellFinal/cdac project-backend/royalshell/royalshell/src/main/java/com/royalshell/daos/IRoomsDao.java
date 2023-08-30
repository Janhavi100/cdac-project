package com.royalshell.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.royalshell.entities.Rooms;

public interface IRoomsDao extends JpaRepository<Rooms, Integer>{

	Rooms findByRoomId(int id);
	
	
	@Query("SELECT r FROM Rooms r WHERE r.roomId NOT IN (:ids)")
	public List<Rooms> findRoomsByIds(@Param("ids") List<Integer> ids);
	
	@Query("SELECT COUNT(r) FROM Rooms r")
	public int findRoomsCount();


}
