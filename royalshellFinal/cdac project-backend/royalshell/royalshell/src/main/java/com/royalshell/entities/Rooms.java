package com.royalshell.entities;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "rooms")
public class Rooms {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "room_id")
	private int roomId;
	@Column(name = "category_id")
	private Integer categoryId;
	@Column(name = "bed_count")
	private int bedCount;
	@Column(name = "adult_count")
	private int adultCount;
	@Column(name = "child_count")
	private int childCount;
	@Column
	private int price;
	@Column
	private String image;
	@Column
	private String description;

//	@ManyToOne
//	@JoinColumn(name = "category_id", referencedColumnName = "category_id")
//	private RoomCategory roomCategory;
	
	@ManyToMany
	@JoinTable(name = "room_facility",joinColumns = @JoinColumn(name = "room_id",referencedColumnName = "room_id"),inverseJoinColumns = @JoinColumn(name = "facility_id",referencedColumnName = "facility_id"))
	private List<Facility> facility;

	public Rooms() {

	}

	public Rooms(int roomId, Integer categoryId, int bedCount, int adultCount, int childCount, int price, String image,
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

	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
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

	@Override
	public String toString() {
		return "Rooms [roomId=" + roomId + ", categoryId=" + categoryId + ", bedCount=" + bedCount + ", adultCount="
				+ adultCount + ", childCount=" + childCount + ", price=" + price + ", image=" + image + ", description="
				+ description + ", facility=" + facility + "]";
	}

	
	

	
	
}
