package com.royalshell.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "room_category")
public class RoomCategory {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "category_id")
	private int categoryId;
	@Column
	private String title;
	@Column
	private String description;
	
	@OneToMany
	@JoinColumn(name = "category_id",referencedColumnName = "category_id")
	private List<Rooms> roomsList;

	public RoomCategory() {
			
		}

	public RoomCategory(int categoryId, String title, String description, List<Rooms> roomsList) {
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
		return "RoomCategory [categoryId=" + categoryId + ", title=" + title + ", description=" + description
				+ ", roomsList=" + roomsList + "]";
	}



}
