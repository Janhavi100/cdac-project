package com.royalshell.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.royalshell.entities.RoomCategory;
import com.royalshell.entities.Rooms;

public interface IRoomsCategoryDao extends JpaRepository<RoomCategory, Integer>{

	RoomCategory findBycategoryId(int id);
	

}
