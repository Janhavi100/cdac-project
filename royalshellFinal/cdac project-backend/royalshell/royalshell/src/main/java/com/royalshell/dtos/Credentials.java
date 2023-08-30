package com.royalshell.dtos;

import javax.validation.constraints.NotBlank;

public class Credentials {
	
	@NotBlank
	private String email;
	@NotBlank
	private String password;
	
	public Credentials() {
		super();
	}

	public Credentials(String email, String password) {
		super();
		this.email = email;
		this.password = password;
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

	@Override
	public String toString() {
		return "Credentials [email=" + email + ", password=" + password + "]";
	}
	
	

}
