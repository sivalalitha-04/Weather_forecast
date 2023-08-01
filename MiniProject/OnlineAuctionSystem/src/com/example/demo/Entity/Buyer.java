package com.example.demo.Entity;



public class Buyer {
	private int buyerId;
	private String buyerName;
	private String email;
	private String password;
	private String mobile;
	private String address;
	private int zipcode;

	public int getBuyerId() {
		return buyerId;
	}
	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}
	public String getBuyerName() {
		return buyerName;
	}
	public void setBuyerName(String buyerName) {
		this.buyerName = buyerName;
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
	public int getZipcode() {
		return zipcode;
	}
	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}
	
	public Buyer(int buyerId, String buyerName, String email, String password, String mobile, String address,
			int zipcode) {
		super();
		this.buyerId = buyerId;
		this.buyerName = buyerName;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.address = address;
		this.zipcode = zipcode;
	}
	@Override
	public String toString() {
	    String format = "%-10s %-20s %-30s %-20s %-15s %-30s %-10s%n";

	    StringBuilder sb = new StringBuilder();
	    sb.append(String.format(format, "Buyer ID", "Buyer Name", "Email", "Password", "Mobile", "Address", "Zip Code"));
	    sb.append(String.format(format, "--------", "----------", "-----", "--------", "------", "-------", "--------"));

	    sb.append(String.format(format, buyerId, buyerName, email, password, mobile, address, zipcode));

	    return sb.toString();
	}	
	
}

