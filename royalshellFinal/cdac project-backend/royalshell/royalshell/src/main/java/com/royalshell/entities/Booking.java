package com.royalshell.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "booking")
public class Booking {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "booking_id")
	private int bookingId;
	@Column(name = "user_id")
	private Integer userId;
	@Column(name = "room_id")
	private Integer roomId;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "booking_date", insertable = false)
	private Date bookingDate;
	@Column(name = "check_in_date")
	@Temporal(TemporalType.DATE)
	private Date checkIn;
	@Temporal(TemporalType.DATE)
	@Column(name = "check_out_date")
	private Date checkOut;
	@Column
	private String remark;
	@Column
	private String status;
	@Column
	private String payment;
	
//	@ManyToOne
//	@JoinColumn(name = "room_id",referencedColumnName = "room_id")
//	private Rooms rooms;


	public Booking() {
		
	}

public Booking(int bookingId, Integer userId, Integer roomId, Date bookingDate, Date checkIn, Date checkOut,
		String remark, String status, String payment) {
	super();
	this.bookingId = bookingId;
	this.userId = userId;
	this.roomId = roomId;
	this.bookingDate = bookingDate;
	this.checkIn = checkIn;
	this.checkOut = checkOut;
	this.remark = remark;
	this.status = status;
	this.payment = payment;
}

public int getBookingId() {
	return bookingId;
}

public void setBookingId(int bookingId) {
	this.bookingId = bookingId;
}

public Integer getUserId() {
	return userId;
}

public void setUserId(Integer userId) {
	this.userId = userId;
}

public Integer getRoomId() {
	return roomId;
}

public void setRoomId(Integer roomId) {
	this.roomId = roomId;
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

@Override
public String toString() {
	return "Booking [bookingId=" + bookingId + ", userId=" + userId + ", roomId=" + roomId + ", bookingDate="
			+ bookingDate + ", checkIn=" + checkIn + ", checkOut=" + checkOut + ", remark=" + remark + ", status="
			+ status + ", payment=" + payment + "]";
}


	



}
