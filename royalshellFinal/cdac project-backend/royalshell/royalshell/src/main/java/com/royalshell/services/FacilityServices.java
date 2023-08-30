package com.royalshell.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.royalshell.daos.IFacilityDao;
import com.royalshell.dtos.DtoEntityConverter;
import com.royalshell.dtos.FacilityDto;
import com.royalshell.entities.Facility;

@Transactional
@Service
public class FacilityServices {

	@Autowired
	private IFacilityDao facilityDao;

	@Autowired
	private DtoEntityConverter converter;

	public List<FacilityDto> findAllFacility() {
		List<Facility> facilityList = null;
		List<FacilityDto> facilityDtoList = null;
		try {
			facilityList = facilityDao.findAll();
			facilityDtoList =facilityList.stream().map(Facility -> converter.FacilityEntityToFacilityDto(Facility))
			.collect(Collectors.toList());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return facilityDtoList;
	}
	
	public FacilityDto findFacilityById(int id) {
		Facility facility = null;
		FacilityDto facilityDto=null;
		try {
			facility = facilityDao.findByFacilityId(id);
			facilityDto=converter.FacilityEntityToFacilityDto(facility);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		return facilityDto;
	}
	
//	public Facility findFacilityById(int id) {
//		Facility facility = facilityDao.findByFacilityId(id);
//		return facility;
//	}

	public Map<String, Object> addFacility(FacilityDto facilityDto) {
	if(facilityDto!=null) {
		Facility facilityToBeSaved = null;
		Facility facilityToSaved = null;
		try {
			facilityToBeSaved = converter.FacilityDtoToFacilityEntity(facilityDto);
			facilityToSaved = facilityDao.save(facilityToBeSaved);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return Collections.singletonMap("addedRows", 1);
	}
	return Collections.singletonMap("addedRows", 0);
	}

	public Map<String, Object> editFacility(int id, FacilityDto facilityDto) {
		if (facilityDao.existsById(id)) {
			Facility facilityToBeUpdated = null;
			Facility facilityToUpdated = null;
			try {
				facilityToBeUpdated = converter.FacilityDtoToFacilityEntity(facilityDto);
				facilityToUpdated = facilityDao.save(facilityToBeUpdated);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return Collections.singletonMap("updatedRows", 1);
		}
		return Collections.singletonMap("updatedRows", 0);
	}

	public Map<String, Object> deleteFacility(int id) {
		if (facilityDao.existsById(id)) {
			facilityDao.deleteById(id);
			return Collections.singletonMap("deletedRows", 1);
		}
		return Collections.singletonMap("deletedRows", 0);
	}
}
