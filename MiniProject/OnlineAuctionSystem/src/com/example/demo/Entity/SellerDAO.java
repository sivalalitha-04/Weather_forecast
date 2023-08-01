package com.example.demo.Entity;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

abstract class DAO<T> {
    abstract void addSeller(T entity);
    abstract T getSellerById(int id);
    abstract List<T> getAllSellers();
    abstract void updateSeller(T entity);
    abstract void deleteSeller(int id);
}

public class SellerDAO extends DAO<Seller> {
    private Connection connection;

    public SellerDAO(Connection connection) {
        this.connection = connection;
    }
    
    public void addSeller(Seller seller) {
        String query = "INSERT INTO seller (sellerId, sellerName, company, email, password) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, seller.getSellerId());
            pstmt.setString(2, seller.getSellerName());
            pstmt.setString(3, seller.getCompany());
            pstmt.setString(4, seller.getEmail());
            pstmt.setString(5, seller.getPassword());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Seller getSellerById(int sellerId) {
        String query = "SELECT * FROM seller WHERE sellerId = ?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, sellerId);

            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                String sellerName = rs.getString("sellerName");
                String company = rs.getString("company");
                String email = rs.getString("email");
                String password = rs.getString("password");

                return new Seller(sellerId, sellerName, company, email, password);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null; // Seller with the given ID not found
    }

    public List<Seller> getAllSellers() {
        List<Seller> sellers = new ArrayList<>();
        String query = "SELECT * FROM seller";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            ResultSet rs = pstmt.executeQuery();
            while (rs.next()) {
                int sellerId = rs.getInt("sellerId");
                String sellerName = rs.getString("sellerName");
                String company = rs.getString("company");
                String email = rs.getString("email");
                String password = rs.getString("password");

                sellers.add(new Seller(sellerId, sellerName, company, email, password));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return sellers;
    }
    
    public void updateSeller(Seller seller) {
        String query = "UPDATE seller SET sellerName=?, company=?, email=?, password=? WHERE sellerId=?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setString(1, seller.getSellerName());
            pstmt.setString(2, seller.getCompany());
            pstmt.setString(3, seller.getEmail());
            pstmt.setString(4, seller.getPassword());
            pstmt.setInt(5, seller.getSellerId());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    public void deleteSeller(int sellerId) {
        String query = "DELETE FROM seller WHERE sellerId=?";
        try (PreparedStatement pstmt = connection.prepareStatement(query)) {
            pstmt.setInt(1, sellerId);

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
