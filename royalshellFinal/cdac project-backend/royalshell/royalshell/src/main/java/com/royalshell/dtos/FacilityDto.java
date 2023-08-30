package com.royalshell.dtos;

import javax.persistence.Column;

public class FacilityDto {

	private int facilityId;
	private String title;
	private String description;
	
	public FacilityDto() {
		super();
	}
	
	public FacilityDto(int facilityId, String title, String description) {
		super();
		this.facilityId = facilityId;
		this.title = title;
		this.description = description;
	}

	public int getFacilityId() {
		return facilityId;
	}

	public void setFacilityId(int facilityId) {
		this.facilityId = facilityId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "FaclityDto [facilityId=" + facilityId + ", title=" + title + ", description=" + description + "]";
	}
	
	
	
}
