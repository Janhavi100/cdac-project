package com.royalshell.dtos;

public class ChangePasswordDto {

	private int userId;
	private String oldPassword;
	private String newPassword;
	
	public ChangePasswordDto(int userId, String oldPassword, String newPassword) {
		super();
		this.userId = userId;
		this.oldPassword = oldPassword;
		this.newPassword = newPassword;
	}

	public ChangePasswordDto() {
		super();
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	@Override
	public String toString() {
		return "ChangePasswordDto [userId=" + userId + ", oldPassword=" + oldPassword + ", newPassword=" + newPassword
				+ "]";
	}
	
	
	
}
