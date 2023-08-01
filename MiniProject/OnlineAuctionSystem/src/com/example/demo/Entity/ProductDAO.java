package com.example.demo.Entity;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {
    private Connection connection;

    public ProductDAO(Connection connection) {
        this.connection = connection;
    }

    public void addProduct(Product product) {
        String query = "INSERT INTO product (productId, productName, brand, description, sellerId, lowPrice, actualPrice, targetPrice, dateOfSale) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, product.getProductId());
            pstmt.setString(2, product.getProductName());
            pstmt.setString(3, product.getBrand());
            pstmt.setString(4, product.getDescription());
            pstmt.setInt(5, product.getSellerId());
            pstmt.setInt(6, product.getLowPrice());
            pstmt.setInt(7, product.getActualPrice());
            pstmt.setInt(8, product.getTargetPrice());
            pstmt.setDate(9, new java.sql.Date(product.getDateOfSale().getTime()));

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Product getProductById(int productId) {
        String query = "SELECT * FROM product WHERE productId = ?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, productId);

            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                String productName = rs.getString("productName");
                String brand = rs.getString("brand");
                String description = rs.getString("description");
                int sellerId = rs.getInt("sellerId");
                int lowPrice = rs.getInt("lowPrice");
                int actualPrice = rs.getInt("actualPrice");
                int targetPrice = rs.getInt("targetPrice");
                java.sql.Date dateOfSale = rs.getDate("dateOfSale");

                return new Product(productId, productName, brand, description, sellerId, lowPrice, actualPrice, targetPrice, dateOfSale);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null; // Product with the given ID not found
    }

    public List<Product> getAllProducts() {
        List<Product> products = new ArrayList<>();
        String query = "SELECT * FROM product";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                int productId = rs.getInt("productId");
                String productName = rs.getString("productName");
                String brand = rs.getString("brand");
                String description = rs.getString("description");
                int sellerId = rs.getInt("sellerId");
                int lowPrice = rs.getInt("lowPrice");
                int actualPrice = rs.getInt("actualPrice");
                int targetPrice = rs.getInt("targetPrice");
                java.sql.Date dateOfSale = rs.getDate("dateOfSale");

                products.add(new Product(productId, productName, brand, description, sellerId, lowPrice, actualPrice, targetPrice, dateOfSale));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return products;
    }

    public void updateProduct(Product product) {
        String query = "UPDATE product SET productName=?, brand=?, description=?, sellerId=?, lowPrice=?, actualPrice=?, targetPrice=?, dateOfSale=? WHERE productId=?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setString(1, product.getProductName());
            pstmt.setString(2, product.getBrand());
            pstmt.setString(3, product.getDescription());
            pstmt.setInt(4, product.getSellerId());
            pstmt.setInt(5, product.getLowPrice());
            pstmt.setInt(6, product.getActualPrice());
            pstmt.setInt(7, product.getTargetPrice());
            pstmt.setDate(8, new java.sql.Date(product.getDateOfSale().getTime()));
            pstmt.setInt(9, product.getProductId());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteProduct(int productId) {
        String query = "DELETE FROM product WHERE productId=?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, productId);

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

 
}
