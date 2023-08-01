package com.example.demo.Entity;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BidProductDAO {
    private Connection connection;

    public BidProductDAO(Connection connection) {
        this.connection = connection;
    }

    public void addBidProduct(BidProduct bidProduct) {
        String query = "INSERT INTO bidProduct (bidProductId, productId, sellerId, buyerId, bidPrice, status) VALUES (?, ?, ?, ?, ?, ?)";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, bidProduct.getBidProductId());
            pstmt.setInt(2, bidProduct.getProductId());
            pstmt.setInt(3, bidProduct.getSellerId());
            pstmt.setInt(4, bidProduct.getBuyerId());
            pstmt.setInt(5, bidProduct.getBidPrice());
            pstmt.setString(6, bidProduct.getStatus());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public BidProduct getBidProductById(int bidProductId) {
        String query = "SELECT * FROM bidProduct WHERE bidProductId = ?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, bidProductId);

            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                int productId = rs.getInt("productId");
                int sellerId = rs.getInt("sellerId");
                int buyerId = rs.getInt("buyerId");
                int bidPrice = rs.getInt("bidPrice");
                String status = rs.getString("status");

                return new BidProduct(bidProductId, productId, sellerId, buyerId, status, bidPrice);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null; // BidProduct with the given ID not found
    }

    public List<BidProduct> getAllBidProducts() {
        List<BidProduct> bidProducts = new ArrayList<>();
        String query = "SELECT * FROM bidProduct";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                int bidProductId = rs.getInt("bidProductId");
                int productId = rs.getInt("productId");
                int sellerId = rs.getInt("sellerId");
                int buyerId = rs.getInt("buyerId");
                int bidPrice = rs.getInt("bidPrice");
                String status = rs.getString("status");

                bidProducts.add(new BidProduct(bidProductId, productId, sellerId, buyerId, status, bidPrice));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return bidProducts;
    }

    public void updateBidProduct(BidProduct bidProduct) {
        String query = "UPDATE bidProduct SET productId=?, sellerId=?, buyerId=?, bidPrice=?, status=? WHERE bidProductId=?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, bidProduct.getProductId());
            pstmt.setInt(2, bidProduct.getSellerId());
            pstmt.setInt(3, bidProduct.getBuyerId());
            pstmt.setInt(4, bidProduct.getBidPrice());
            pstmt.setString(5, bidProduct.getStatus());
            pstmt.setInt(6, bidProduct.getBidProductId());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteBidProduct(int bidProductId) {
        String query = "DELETE FROM bidProduct WHERE bidProductId=?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, bidProductId);

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void placeBid(int bidProductId, int buyerId, int bidPrice) {
        BidProduct bidProduct = getBidProductById(bidProductId);
        if (bidProduct == null) {
            System.out.println("BidProduct with the given ID not found.");
            return;
        }

        if (bidPrice <= bidProduct.getBidPrice()) {
            System.out.println("The new bid price must be higher than the current bid price.");
            return;
        }

        bidProduct.setBuyerId(buyerId);
        bidProduct.setBidPrice(bidPrice);
        bidProduct.setStatus("active");

        updateBidProduct(bidProduct);
        System.out.println("Bid placed successfully.");
    }

    // Function to get the current bid price for a product
    public int getCurrentBidPrice(int bidProductId) {
        BidProduct bidProduct = getBidProductById(bidProductId);
        if (bidProduct != null) {
            return bidProduct.getBidPrice();
        }
        System.out.println("BidProduct with the given ID not found.");
        return -1; 
    }
    
    public List<Product> getProductsBoughtByBuyer(int buyerId) {
            List<Product> productsBought = new ArrayList<>();
            String query = "SELECT p.* FROM bidProduct bp INNER JOIN product p ON bp.productId = p.productId WHERE bp.buyerId = ?";
            try (PreparedStatement pstmt = connection.prepareStatement(query)) {
                pstmt.setInt(1, buyerId);

                ResultSet rs = pstmt.executeQuery();
                while (rs.next()) {
                    int productId = rs.getInt("productId");
                    String productName = rs.getString("productName");
                    String brand = rs.getString("brand");
                    String description = rs.getString("description");
                    int sellerId = rs.getInt("sellerId");
                    int actualPrice = rs.getInt("actualPrice");
                    int lowPrice = rs.getInt("lowPrice");
                    int targetPrice = rs.getInt("targetPrice");
                    Date dateOfSale = rs.getDate("dateOfSale");

                    productsBought.add(new Product(productId, productName, brand, description, sellerId, actualPrice, lowPrice, targetPrice, dateOfSale));
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
            return productsBought;
        }

    
    
}
