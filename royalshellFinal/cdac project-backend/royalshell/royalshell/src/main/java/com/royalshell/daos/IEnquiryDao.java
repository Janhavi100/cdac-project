package com.royalshell.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.royalshell.entities.Enquiry;
import com.royalshell.entities.Facility;

public interface IEnquiryDao extends JpaRepository<Enquiry, Integer>{

	Enquiry findByEnquiryId(int enquiryId);
}
