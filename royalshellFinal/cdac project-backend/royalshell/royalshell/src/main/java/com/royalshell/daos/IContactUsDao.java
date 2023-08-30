package com.royalshell.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.royalshell.entities.ContactUs;

public interface IContactUsDao extends JpaRepository<ContactUs, Integer>{

	ContactUs findById(int facilityId);
}
