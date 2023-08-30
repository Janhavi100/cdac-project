package com.royalshell.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.royalshell.entities.Facility;

public interface IFacilityDao extends JpaRepository<Facility, Integer>{

	Facility findByFacilityId(int facilityId);
}
