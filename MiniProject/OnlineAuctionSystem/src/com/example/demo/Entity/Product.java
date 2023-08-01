package com.example.demo.Entity;

import java.sql.Date;



public class Product {

	private int productId;
	private String productName;
	private String brand;
	private String description;
	private int sellerId;
	private int actualPrice;
	private int lowPrice;
	private int targetPrice;
	private Date dateOfSale;
	
	
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getSellerId() {
		return sellerId;
	}
	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}
	public int getActualPrice() {
		return actualPrice;
	}
	public void setActualPrice(int actualPrice) {
		this.actualPrice = actualPrice;
	}
	public int getLowPrice() {
		return lowPrice;
	}
	public void setLowPrice(int lowPrice) {
		this.lowPrice = lowPrice;
	}
	public int getTargetPrice() {
		return targetPrice;
	}
	public void setTargetPrice(int targetPrice) {
		this.targetPrice = targetPrice;
	}
	public Date getDateOfSale() {
		return dateOfSale;
	}
	public void setDateOfSale(Date dateOfSale) {
		this.dateOfSale = dateOfSale;
	}
	
	
	
	public Product(int productId, String productName, String brand, String description, int sellerId, int lowPrice,
			int actualPrice, int targetPrice, Date dateOfSale) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.brand = brand;
		this.description = description;
		this.sellerId = sellerId;
		this.actualPrice = actualPrice;
		this.lowPrice = lowPrice;
		this.targetPrice = targetPrice;
		this.dateOfSale = dateOfSale;
	}
	@Override
	public String toString() {
	    String format = "%-10s %-20s %-20s %-50s %-10s %-10s %-10s %-10s %-20s%n";

	    StringBuilder sb = new StringBuilder();
	    sb.append(String.format(format, "Product ID", "Product Name", "Brand", "Description", "Seller ID", "Actual Price", "Low Price", "Target Price", "Date of Sale"));
	    sb.append(String.format(format, "----------", "------------", "-----", "-----------", "---------", "------------", "--------", "------------", "------------"));

	    sb.append(String.format(format, productId, productName, brand, description, sellerId, actualPrice, lowPrice, targetPrice, dateOfSale));

	    return sb.toString();
	}
	
}
