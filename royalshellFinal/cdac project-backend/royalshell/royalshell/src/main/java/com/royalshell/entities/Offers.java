package com.royalshell.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="offers")
public class Offers {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name="offer_id")
	private int offerId;
	@Column
	private String title;
	@Column
	private String description;
	@Column(name="time_period")
	private String timePeriod;

	public Offers() {
		
	}

	public Offers(int offerId, String title, String description, String timePeriod) {
		super();
		this.offerId = offerId;
		this.title = title;
		this.description = description;
		this.timePeriod = timePeriod;
	}

	public int getOfferId() {
		return offerId;
	}

	public void setOfferId(int offerId) {
		this.offerId = offerId;
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

	public String getTimePeriod() {
		return timePeriod;
	}

	public void setTimePeriod(String timePeriod) {
		this.timePeriod = timePeriod;
	}

	@Override
	public String toString() {
		return "Offers [offerId=" + offerId + ", title=" + title + ", description=" + description + ", timePeriod="
				+ timePeriod + "]";
	}

	
}
