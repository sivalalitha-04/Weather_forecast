package com.example.demo.Entity;


public class Seller {

	private int sellerId;
	private String sellerName;
	private String company;
	private String email;
	private String password;

	public int getSellerId() {
		return sellerId;
	}
	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}
	public String getSellerName() {
		return sellerName;
	}
	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
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
	
	
	
	public Seller(int sellerId, String sellerName, String company, String email, String password) {
		super();
		this.sellerId = sellerId;
		this.sellerName = sellerName;
		this.company = company;
		this.email = email;
		this.password = password;
	}
	@Override
	public String toString() {
	    // Define the table format
	    String format = "%-10s %-20s %-30s %-30s %s%n";
	    StringBuilder sb = new StringBuilder();
	    sb.append(String.format(format, "Seller ID", "Seller Name", "Company", "Email", "Password"));
	    sb.append(String.format(format, "---------", "-----------", "-------", "-----", "--------"));

	    sb.append(String.format(format, sellerId, sellerName, company, email, password));

	    return sb.toString();
	}


}
