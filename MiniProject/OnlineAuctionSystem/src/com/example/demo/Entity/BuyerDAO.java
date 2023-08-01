package com.example.demo.Entity;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BuyerDAO {
    private Connection connection;

    public BuyerDAO(Connection connection) {
        this.connection = connection;
    }

    public void addBuyer(Buyer buyer) {
        String query = "INSERT INTO buyer (buyerId, buyerName, email, password, mobile, address, zipcode) VALUES (?, ?, ?, ?, ?, ?, ?)";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, buyer.getBuyerId());
            pstmt.setString(2, buyer.getBuyerName());
            pstmt.setString(3, buyer.getEmail());
            pstmt.setString(4, buyer.getPassword());
            pstmt.setString(5, buyer.getMobile());
            pstmt.setString(6, buyer.getAddress());
            pstmt.setInt(7, buyer.getZipcode());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Buyer getBuyerById(int buyerId) {
        String query = "SELECT * FROM buyer WHERE buyerId = ?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, buyerId);

            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                String buyerName = rs.getString("buyerName");
                String email = rs.getString("email");
                String password = rs.getString("password");
                String mobile = rs.getString("mobile");
                String address = rs.getString("address");
                int zipcode = rs.getInt("zipcode");

                return new Buyer(buyerId, buyerName, email, password, mobile, address, zipcode);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null; // Buyer with the given ID not found
    }

    public List<Buyer> getAllBuyers() {
        List<Buyer> buyers = new ArrayList<>();
        String query = "SELECT * FROM buyer";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                int buyerId = rs.getInt("buyerId");
                String buyerName = rs.getString("buyerName");
                String email = rs.getString("email");
                String password = rs.getString("password");
                String mobile = rs.getString("mobile");
                String address = rs.getString("address");
                int zipcode = rs.getInt("zipcode");

                buyers.add(new Buyer(buyerId, buyerName, email, password, mobile, address, zipcode));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return buyers;
    }
    
    public void updateBuyer(Buyer buyer) {
        String query = "UPDATE buyer SET buyerName=?, email=?, password=?, mobile=?, address=?, zipcode=? WHERE buyerId=?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setString(1, buyer.getBuyerName());
            pstmt.setString(2, buyer.getEmail());
            pstmt.setString(3, buyer.getPassword());
            pstmt.setString(4, buyer.getMobile());
            pstmt.setString(5, buyer.getAddress());
            pstmt.setInt(6, buyer.getZipcode());
            pstmt.setInt(7, buyer.getBuyerId());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    public void deleteBuyer(int buyerId) {
        String query = "DELETE FROM buyer WHERE buyerId=?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, buyerId);

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}

