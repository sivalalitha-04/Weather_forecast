package com.example.demo.Entity;



public class BidProduct {
	
	
	private int bidProductId;
	private int productId;
	private int sellerId;
	private int buyerId;
	private String status;
	private int bidPrice;
	
	
	public int getBidProductId() {
		return bidProductId;
	}
	public void setBidProductId(int bidProductId) {
		this.bidProductId = bidProductId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getSellerId() {
		return sellerId;
	}
	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}
	public int getBuyerId() {
		return buyerId;
	}
	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getBidPrice() {
		return bidPrice;
	}
	public void setBidPrice(int bidPrice) {
		this.bidPrice = bidPrice;
	}
	
	
	
	public BidProduct(int bidProductId, int productId, int sellerId, int buyerId, String status, int bidPrice) {
		super();
		this.bidProductId = bidProductId;
		this.productId = productId;
		this.sellerId = sellerId;
		this.buyerId = buyerId;
		this.status = status;
		this.bidPrice = bidPrice;
	}
	@Override
	public String toString() {
	    // Define the table format
	    String format = "%-15s %-10s %-10s %-10s %-10s %-10s%n";

	    StringBuilder sb = new StringBuilder();
	    sb.append(String.format(format, "Bid Product ID", "Product ID", "Seller ID", "Buyer ID", "Status", "Bid Price"));
	    sb.append(String.format(format, "--------------", "----------", "---------", "--------", "------", "---------"));

	    sb.append(String.format(format, bidProductId, productId, sellerId, buyerId, status, bidPrice));

	    return sb.toString();
	}

	
}
