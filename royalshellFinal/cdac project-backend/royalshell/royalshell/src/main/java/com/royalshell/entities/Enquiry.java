package com.royalshell.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="enquiry")
public class Enquiry {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name="enquiry_id")
	private int enquiryId;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="mobile_no")
	private String mobile;
	@Column
	private String email;
	@Column
	private String remark;
	
	public Enquiry() {
		// TODO Auto-generated constructor stub
	}

	public Enquiry(int enquiryId, String firstName, String lastName, String mobile, String email, String remark) {
		super();
		this.enquiryId = enquiryId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobile = mobile;
		this.email = email;
		this.remark = remark;
	}

	public int getEnquiryId() {
		return enquiryId;
	}

	public void setEnquiryId(int enquiryId) {
		this.enquiryId = enquiryId;
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

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	@Override
	public String toString() {
		return "Enquiry [enquiryId=" + enquiryId + ", firstName=" + firstName + ", lastName=" + lastName + ", mobile="
				+ mobile + ", email=" + email + ", remark=" + remark + "]";
	}

	
	
}
