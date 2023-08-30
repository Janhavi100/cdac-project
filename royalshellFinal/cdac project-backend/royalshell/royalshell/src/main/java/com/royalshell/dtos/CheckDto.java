package com.royalshell.dtos;

import java.sql.Date;

public class CheckDto {
	
	private Date checkIn;
	private Date checkOut;
	
	public CheckDto() {
		super();
	}

	public CheckDto(Date checkIn, Date checkOut) {
		super();
		this.checkIn = checkIn;
		this.checkOut = checkOut;
	}

	public Date getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(Date checkIn) {
		this.checkIn = checkIn;
	}

	public Date getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(Date checkOut) {
		this.checkOut = checkOut;
	}

	@Override
	public String toString() {
		return "CheckAvailableRoomsDto [checkIn=" + checkIn + ", checkOut=" + checkOut + "]";
	}
	
	

}
