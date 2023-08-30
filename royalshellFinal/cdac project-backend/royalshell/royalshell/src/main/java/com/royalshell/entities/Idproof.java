package com.royalshell.entities;

import java.util.List;

import javax.persistence.CascadeType;

//import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="id_proof")
public class Idproof {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name ="id")
	private int id;
	@Column
	private String type;
	
	@OneToMany(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "idproof",referencedColumnName = "id")
	private List<User> userList;
	
	public Idproof() {
		super();
	}

	public Idproof(int id, String type) {
		super();
		this.id = id;
		this.type = type;
	}
	
	
	

	public Idproof(int id, String type, List<User> userList) {
		super();
		this.id = id;
		this.type = type;
		this.userList = userList;
	}

	
	public List<User> getUserList() {
		return userList;
	}

	public void setUserList(List<User> userList) {
		this.userList = userList;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Idproof [id=" + id + ", type=" + type + "]";
	}
	
	
	
	
	
	
//	@OneToMany
//	@JoinColumn(name = "idproof",referencedColumnName = "id")
//	private List<User> userList;
//
//	public Idproof(int id, String type, List<User> userList) {
//		super();
//		this.id = id;
//		this.type = type;
//		this.userList = userList;
//	}
//
//	public Idproof() {
//		super();
//	}
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public String getType() {
//		return type;
//	}
//
//	public void setType(String type) {
//		this.type = type;
//	}
//
//	public List<User> getUserList() {
//		return userList;
//	}
//
//	public void setUserList(List<User> userList) {
//		this.userList = userList;
//	}
//
//	@Override
//	public String toString() {
//		return "Idproof [id=" + id + ", type=" + type + ", userList=" + userList + "]";
//	}
//	


	
}
