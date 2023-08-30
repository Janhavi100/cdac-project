package com.royalshell.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.springframework.lang.NonNull;



@Entity
@Table(name ="users")
public class User {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name ="user_id")
	private int userId;
	@Column(name ="first_name")
	private String firstName;
	@Column(name ="last_name")
	private String lastName;
	@Column
	
	@NotNull
	private String email;
	@Column
	private String password;
	@Column(name ="idproof")
	private Integer idproof;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(insertable = false)
	private Date createdTimestamp;
	@Column
	private String gender;
	@Column
	private String role;
	@Column
	private String mobile;
	@Column
	private String address;
	@Column
	private String city;
	@Column
	private String state;
	@Column
	private String zipcode;
	
	
//	@ManyToOne
//	@JoinColumn(name = "idproof",referencedColumnName = "id")
//	private Idproof idproofs;
	
	@OneToMany
	@JoinColumn(name = "user_id",referencedColumnName = "user_id")
	private List<Booking> bookingList;

	public User() {
		super();
	}

	public User(int userId, String firstName, String lastName, String email, String password, int idproof,
			Date createdTimestamp, String gender, String role, String mobile, String address, String city, String state,
			String zipcode, List<Booking> bookingList) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.idproof = idproof;
		this.createdTimestamp = createdTimestamp;
		this.gender = gender;
		this.role = role;
		this.mobile = mobile;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.bookingList = bookingList;
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

	public Integer getIdproof() {
		return idproof;
	}

	public void setIdproof(Integer idproof) {
		this.idproof = idproof;
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

	public List<Booking> getBookingList() {
		return bookingList;
	}

	public void setBookingList(List<Booking> bookingList) {
		this.bookingList = bookingList;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", idproof=" + idproof + ", createdTimestamp=" + createdTimestamp
				+ ", gender=" + gender + ", role=" + role + ", mobile=" + mobile + ", address=" + address + ", city="
				+ city + ", state=" + state + ", zipcode=" + zipcode + ", bookingList=" + bookingList + "]";
	}


	








	


		
	
	
}
