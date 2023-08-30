package com.royalshell.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="facility")
public class Facility {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "facility_id")
	private int facilityId;
	@Column
	private String title;
	@Column
	private String description;

	public Facility() {
		
	}

	public Facility(int facilityId, String title, String description) {
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
		return "Facility [facilityId=" + facilityId + ", title=" + title + ", description=" + description + "]";
	}

	
}
