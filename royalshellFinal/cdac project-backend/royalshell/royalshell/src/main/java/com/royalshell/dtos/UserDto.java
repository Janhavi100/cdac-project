package com.royalshell.dtos;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.springframework.lang.NonNull;

import com.royalshell.entities.Booking;
import com.royalshell.entities.Idproof;

public class UserDto {

	private int userId;
	private String firstName;
	private String lastName;
	@NotNull
	private String email;
	private String password;
	private Date createdTimestamp;
	private String gender;
	private String role;
	private String mobile;
	private String address;
	private String city;
	private String state;
	private String zipcode;
	private int idproofs;
	private List<Booking> bookingList;
	private Idproof idproofObject;
	

	public UserDto() {
		super();
	}

	public UserDto(int userId, String firstName, String lastName, String email, String password, Date createdTimestamp,
			String gender, String role, String mobile, String address, String city, String state, String zipcode,
			int idproofs, List<Booking> bookingList) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.createdTimestamp = createdTimestamp;
		this.gender = gender;
		this.role = role;
		this.mobile = mobile;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.idproofs = idproofs;
		this.bookingList = bookingList;
	}

	
	
	public UserDto(int userId, String firstName, String lastName, String email, String password, Date createdTimestamp,
			String gender, String role, String mobile, String address, String city, String state, String zipcode,
			int idproofs, List<Booking> bookingList, Idproof idproofObject) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.createdTimestamp = createdTimestamp;
		this.gender = gender;
		this.role = role;
		this.mobile = mobile;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.idproofs = idproofs;
		this.bookingList = bookingList;
		this.idproofObject = idproofObject;
	}
	

	public Idproof getIdproofObject() {
		return idproofObject;
	}

	public void setIdproofObject(Idproof idproofObject) {
		this.idproofObject = idproofObject;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getCreatedTimestamp() {
		return createdTimestamp;
	}

	public void setCreatedTimestamp(Date createdTimestamp) {
		this.createdTimestamp = createdTimestamp;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public int getIdproofs() {
		return idproofs;
	}

	public void setIdproofs(int idproofs) {
		this.idproofs = idproofs;
	}

	public List<Booking> getBookingList() {
		return bookingList;
	}

	public void setBookingList(List<Booking> bookingList) {
		this.bookingList = bookingList;
	}

	@Override
	public String toString() {
		return "UserDto [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", createdTimestamp=" + createdTimestamp + ", gender=" + gender + ", role="
				+ role + ", mobile=" + mobile + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", zipcode=" + zipcode + ", idproofs=" + idproofs + ", bookingList=" + bookingList + "]";
	}

	

//
//	public UserDto(int userId, String firstName, String lastName, String email, String password, Date createdTimestamp,
//			String gender, String role, String mobile, String address, String city, String state, String zipcode,
//			Idproof idproofs, List<Booking> bookingList) {
//		super();
//		this.userId = userId;
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.email = email;
//		this.password = password;
//		this.createdTimestamp = createdTimestamp;
//		this.gender = gender;
//		this.role = role;
//		this.mobile = mobile;
//		this.address = address;
//		this.city = city;
//		this.state = state;
//		this.zipcode = zipcode;
//		this.idproofs = idproofs;
//		this.bookingList = bookingList;
//	}
//
//
//
//	public int getUserId() {
//		return userId;
//	}
//
//
//
//	public void setUserId(int userId) {
//		this.userId = userId;
//	}
//
//
//
//	public String getFirstName() {
//		return firstName;
//	}
//
//
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//
//
//	public String getLastName() {
//		return lastName;
//	}
//
//
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//
//
//	public String getEmail() {
//		return email;
//	}
//
//
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//
//
//	public String getPassword() {
//		return password;
//	}
//
//
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//
//
//	public Date getCreatedTimestamp() {
//		return createdTimestamp;
//	}
//
//
//
//	public void setCreatedTimestamp(Date createdTimestamp) {
//		this.createdTimestamp = createdTimestamp;
//	}
//
//
//
//	public String getGender() {
//		return gender;
//	}
//
//
//
//	public void setGender(String gender) {
//		this.gender = gender;
//	}
//
//
//
//	public String getRole() {
//		return role;
//	}
//
//
//
//	public void setRole(String role) {
//		this.role = role;
//	}
//
//
//
//	public String getMobile() {
//		return mobile;
//	}
//
//
//
//	public void setMobile(String mobile) {
//		this.mobile = mobile;
//	}
//
//
//
//	public String getAddress() {
//		return address;
//	}
//
//
//
//	public void setAddress(String address) {
//		this.address = address;
//	}
//
//
//
//	public String getCity() {
//		return city;
//	}
//
//
//
//	public void setCity(String city) {
//		this.city = city;
//	}
//
//
//
//	public String getState() {
//		return state;
//	}
//
//
//
//	public void setState(String state) {
//		this.state = state;
//	}
//
//
//
//	public String getZipcode() {
//		return zipcode;
//	}
//
//
//
//	public void setZipcode(String zipcode) {
//		this.zipcode = zipcode;
//	}
//
//
//
//	public Idproof getIdproofs() {
//		return idproofs;
//	}
//
//
//
//	public void setIdproofs(Idproof idproofs) {
//		this.idproofs = idproofs;
//	}
//
//
//
//	public List<Booking> getBookingList() {
//		return bookingList;
//	}
//
//
//
//	public void setBookingList(List<Booking> bookingList) {
//		this.bookingList = bookingList;
//	}
//
//
//
//	@Override
//	public String toString() {
//		return "UserDto [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
//				+ ", password=" + password + ", createdTimestamp=" + createdTimestamp + ", gender=" + gender + ", role="
//				+ role + ", mobile=" + mobile + ", address=" + address + ", city=" + city + ", state=" + state
//				+ ", zipcode=" + zipcode + ", idproofs=" + idproofs + ", bookingList=" + bookingList + "]";
//	}


	
}
