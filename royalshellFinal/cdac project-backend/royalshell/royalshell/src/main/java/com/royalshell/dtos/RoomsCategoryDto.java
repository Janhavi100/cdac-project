package com.royalshell.dtos;

import java.util.List;

import com.royalshell.entities.Rooms;

public class RoomsCategoryDto {

	private int categoryId;
	private String title;
	private String description;
	private List<Rooms> roomsList;
	
	public RoomsCategoryDto() {
		super();
	}

	public RoomsCategoryDto(int categoryId, String title, String description, List<Rooms> roomsList) {
		super();
		this.categoryId = categoryId;
		this.title = title;
		this.description = description;
		this.roomsList = roomsList;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
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

	public List<Rooms> getRoomsList() {
		return roomsList;
	}

	public void setRoomsList(List<Rooms> roomsList) {
		this.roomsList = roomsList;
	}

	@Override
	public String toString() {
		return "RoomsCategoryDto [categoryId=" + categoryId + ", title=" + title + ", description=" + description
				+ ", roomsList=" + roomsList + "]";
	}
	
	

}
