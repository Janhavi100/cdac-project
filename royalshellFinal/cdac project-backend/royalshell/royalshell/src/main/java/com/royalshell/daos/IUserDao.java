package com.royalshell.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.royalshell.entities.User;


public interface IUserDao extends JpaRepository<User, Integer> {

	User findByUserId(int id);
	User findByEmail(String email);
	
	@Query("SELECT COUNT(u) FROM User u")
	public int findUserCount();
	
}


