package com.royalshell.dtos;



import java.sql.Date;

import com.royalshell.entities.Rooms;

public class BookingDto {

	private int bookingId;
	private int userId;
	private Date bookingDate;
	private Date checkIn;
	private Date checkOut;
	private String remark;
	private String status;
	private String payment;
	private Integer roomId;
	
	public BookingDto() {
		super();
	}

	public BookingDto(int bookingId, int userId, Date bookingDate, Date checkIn, Date checkOut, String remark,
			String status, String payment, Integer roomId) {
		super();
		this.bookingId = bookingId;
		this.userId = userId;
		this.bookingDate = bookingDate;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.remark = remark;
		this.status = status;
		this.payment = payment;
		this.roomId = roomId;
	}

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
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

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPayment() {
		return payment;
	}

	public void setPayment(String payment) {
		this.payment = payment;
	}

	public Integer getRoomId() {
		return roomId;
	}

	public void setRoomId(Integer roomId) {
		this.roomId = roomId;
	}

	@Override
	public String toString() {
		return "BookingDto [bookingId=" + bookingId + ", userId=" + userId + ", bookingDate=" + bookingDate
				+ ", checkIn=" + checkIn + ", checkOut=" + checkOut + ", remark=" + remark + ", status=" + status
				+ ", payment=" + payment + ", roomId=" + roomId + "]";
	}
	
	

	
}
