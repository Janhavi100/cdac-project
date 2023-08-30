package com.royalshell.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.royalshell.entities.Enquiry;
import com.royalshell.entities.Facility;
import com.royalshell.entities.Offers;

public interface IOffersDao extends JpaRepository<Offers, Integer>{

	Offers findByOfferId(int offerId);
}
