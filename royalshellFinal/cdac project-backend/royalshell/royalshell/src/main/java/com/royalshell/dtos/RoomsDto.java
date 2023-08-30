package com.royalshell.dtos;

import java.util.Arrays;
import java.util.List;

import com.royalshell.entities.Facility;

public class RoomsDto {

	private int roomId;
	private int categoryId;
	private int bedCount;
	private int adultCount;
	private int childCount;
	private int price;
	private String image;
	private String description;
	private List<Facility> facility;
	private List<Integer> facilityIdList;
	private RoomsCategoryDto roomCategory;
	
	public RoomsDto() {
		super();
	}

	public RoomsDto(int roomId, int categoryId, int bedCount, int adultCount, int childCount, int price, String image,
			String description, List<Facility> facility, List<Integer> facilityIdList) {
		super();
		this.roomId = roomId;
		this.categoryId = categoryId;
		this.bedCount = bedCount;
		this.adultCount = adultCount;
		this.childCount = childCount;
		this.price = price;
		this.image = image;
		this.description = description;
		this.facility = facility;
		this.facilityIdList = facilityIdList;
	}

	public RoomsDto(int roomId, int categoryId, int bedCount, int adultCount, int childCount, int price, String image,
			String description, List<Facility> facility) {
		super();
		this.roomId = roomId;
		this.categoryId = categoryId;
		this.bedCount = bedCount;
		this.adultCount = adultCount;
		this.childCount = childCount;
		this.price = price;
		this.image = image;
		this.description = description;
		this.facility = facility;
	}

	
	
	
	public RoomsDto(int roomId, int categoryId, int bedCount, int adultCount, int childCount, int price, String image,
			String description, List<Facility> facility, List<Integer> facilityIdList, RoomsCategoryDto roomCategory) {
		super();
		this.roomId = roomId;
		this.categoryId = categoryId;
		this.bedCount = bedCount;
		this.adultCount = adultCount;
		this.childCount = childCount;
		this.price = price;
		this.image = image;
		this.description = description;
		this.facility = facility;
		this.facilityIdList = facilityIdList;
		this.roomCategory = roomCategory;
	}

	
	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public int getBedCount() {
		return bedCount;
	}

	public void setBedCount(int bedCount) {
		this.bedCount = bedCount;
	}

	public int getAdultCount() {
		return adultCount;
	}

	public void setAdultCount(int adultCount) {
		this.adultCount = adultCount;
	}

	public int getChildCount() {
		return childCount;
	}

	public void setChildCount(int childCount) {
		this.childCount = childCount;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Facility> getFacility() {
		return facility;
	}

	public void setFacility(List<Facility> facility) {
		this.facility = facility;
	}

	public List<Integer> getFacilityIdList() {
		return facilityIdList;
	}

	public void setFacilityIdList(List<Integer> facilityIdList) {
		this.facilityIdList = facilityIdList;
	}
	
	

	public RoomsCategoryDto getRoomCategory() {
		return roomCategory;
	}

	public void setRoomCategory(RoomsCategoryDto roomCategory) {
		this.roomCategory = roomCategory;
	}

	@Override
	public String toString() {
		return "RoomsDto [roomId=" + roomId + ", categoryId=" + categoryId + ", bedCount=" + bedCount + ", adultCount="
				+ adultCount + ", childCount=" + childCount + ", price=" + price + ", image=" + image + ", description="
				+ description + ", facility=" + facility + ", facilityIdList=" + facilityIdList + ", roomCategory="
				+ roomCategory + "]";
	}


	
	
}
