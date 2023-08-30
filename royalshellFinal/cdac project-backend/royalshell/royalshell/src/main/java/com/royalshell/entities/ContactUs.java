package com.royalshell.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
	@Table(name="contact_us")
	public class ContactUs {
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Id
		@Column
		private int id;
		@Column
		private String title;
		@Column(name="mobile_no")
		private String mobileNo;
		@Column
		private String description;
		@Column
		private String email;
		
		
		public ContactUs() {
			
		}


		public ContactUs(int id, String title, String mobileNo, String description, String email) {
			super();
			this.id = id;
			this.title = title;
			this.mobileNo = mobileNo;
			this.description = description;
			this.email = email;
		}


		public int getId() {
			return id;
		}


		public void setId(int id) {
			this.id = id;
		}


		public String getTitle() {
			return title;
		}


		public void setTitle(String title) {
			this.title = title;
		}


		public String getMobileNo() {
			return mobileNo;
		}


		public void setMobileNo(String mobileNo) {
			this.mobileNo = mobileNo;
		}


		public String getDescription() {
			return description;
		}


		public void setDescription(String description) {
			this.description = description;
		}


		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}


		@Override
		public String toString() {
			return "ContactUs [id=" + id + ", title=" + title + ", mobileNo=" + mobileNo + ", description=" + description
					+ ", email=" + email + "]";
		}


		

		
}
