package com.example.demo.Entity;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class Main {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/auction";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "Lalli@2004";

    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
            Scanner scanner = new Scanner(System.in);
            int choice;

            do {
                displayMenu();
                choice = scanner.nextInt();

                switch (choice) {
                    case 1:
                        handleBuyer(scanner, connection);
                        break;
                    case 2:
                        handleSeller(scanner, connection);
                        break;
                    case 3:
                        handleProduct(scanner, connection);
                        break;
                    case 4:
                        handleBidProduct(scanner, connection);
                        break;
                    case 5:
                    	handleWinner(scanner, connection);
                    	break;
                    case 6:
                        System.out.println("Application Ends...");
                        break;
                    default:
                        System.out.println("Invalid choice. Please enter a correct choice.");
                }
            } while (choice != 6);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void displayMenu() {
        System.out.println("\n==== Online Auction System ====");
        System.out.println("=== Your Menu ===");
        System.out.println("1. Buyer");
        System.out.println("2. Seller");
        System.out.println("3. Product");
        System.out.println("4. BidProduct");
        System.out.println("5. Winners");
        System.out.println("6. Exit");
        System.out.print("Enter your choice: ");
    }

    private static void handleBuyer(Scanner scanner, Connection connection) {
        BuyerDAO buyerDAO = new BuyerDAO(connection);
        int buyerId;
        String buyerName, email, password, mobile, address;
		int zipcode;

        System.out.println("\n==== Buyer Operations ====");
        System.out.println("1. Add Buyer");
        System.out.println("2. View All Buyers");
        System.out.println("3. Search Buyer by ID");
        System.out.println("4. Update Buyer");
        System.out.println("5. Delete Buyer");
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.print("Enter Buyer ID: ");
                buyerId = scanner.nextInt();
                scanner.nextLine();
                System.out.print("Enter Buyer Name: ");
                buyerName = scanner.nextLine();
                System.out.print("Enter Email: ");
                email = scanner.nextLine();
                System.out.print("Enter Password: ");
                password = scanner.nextLine();
                System.out.print("Enter Mobile: ");
                mobile = scanner.nextLine();
                System.out.print("Enter Address: ");
                address = scanner.nextLine();
                System.out.print("Enter Zipcode: ");
                zipcode = scanner.nextInt();

                Buyer buyer = new Buyer(buyerId, buyerName, email, password, mobile, address, zipcode);
                buyerDAO.addBuyer(buyer);
                System.out.println("Buyer added successfully!");
                break;
            case 2:
                List<Buyer> buyers = buyerDAO.getAllBuyers();
                displayBuyers(buyers);
                break;
            case 3:
                System.out.print("Enter Buyer ID to search: ");
                buyerId = scanner.nextInt();

                Buyer searchedBuyer = buyerDAO.getBuyerById(buyerId);
                if (searchedBuyer != null) {
                    displayBuyers(Arrays.asList(searchedBuyer));
                } else {
                    System.out.println("Buyer with ID " + buyerId + " not found.");
                }
                break;
             // Inside handleBuyer method
            case 4:
                System.out.print("Enter Buyer ID to update: ");
                buyerId = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character

                Buyer existingBuyer = buyerDAO.getBuyerById(buyerId);
                if (existingBuyer != null) {
                    System.out.print("Enter new Buyer Name: ");
                    buyerName = scanner.nextLine();
                    System.out.print("Enter new Email: ");
                    email = scanner.nextLine();
                    System.out.print("Enter new Password: ");
                    password = scanner.nextLine();
                    System.out.print("Enter new Mobile: ");
                    mobile = scanner.nextLine();
                    System.out.print("Enter new Address: ");
                    address = scanner.nextLine();
                    System.out.print("Enter new Zipcode: ");
                    zipcode = scanner.nextInt();

                    Buyer updatedBuyer = new Buyer(buyerId, buyerName, email, password, mobile, address, zipcode);
                    buyerDAO.updateBuyer(updatedBuyer);
                    System.out.println("Buyer updated successfully!");
                } else {
                    System.out.println("Buyer with ID " + buyerId + " not found.");
                }
                break;
            case 5:
                System.out.print("Enter Buyer ID to delete: ");
                buyerId = scanner.nextInt();

                Buyer buyerToDelete = buyerDAO.getBuyerById(buyerId);
                if (buyerToDelete != null) {
                    buyerDAO.deleteBuyer(buyerId);
                    System.out.println("Buyer deleted successfully!");
                } else {
                    System.out.println("Buyer with ID " + buyerId + " not found.");
                }
                break;
            default:
                System.out.println("Invalid choice.");
        }
    }

    private static void handleSeller(Scanner scanner, Connection connection) {
        SellerDAO sellerDAO = new SellerDAO(connection);
        int sellerId;
        String sellerName, company, email, password;

        System.out.println("\n==== Seller Operations ====");
        System.out.println("1. Add Seller");
        System.out.println("2. View All Sellers");
        System.out.println("3. Search Seller by ID");
        System.out.println("4. Update Seller");
        System.out.println("5. Delete Seller");
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.print("Enter Seller ID: ");
                sellerId = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character
                System.out.print("Enter Seller Name: ");
                sellerName = scanner.nextLine();
                System.out.print("Enter Company: ");
                company = scanner.nextLine();
                System.out.print("Enter Email: ");
                email = scanner.nextLine();
                System.out.print("Enter Password: ");
                password = scanner.nextLine();

                Seller seller = new Seller(sellerId, sellerName, company, email, password);
                sellerDAO.addSeller(seller);
                System.out.println("Seller added successfully!");
                break;
            case 2:
                List<Seller> sellers = sellerDAO.getAllSellers();
                displaySellers(sellers);
                break;
            case 3:
                System.out.print("Enter Seller ID to search: ");
                sellerId = scanner.nextInt();

                Seller searchedSeller = sellerDAO.getSellerById(sellerId);
                if (searchedSeller != null) {
                    displaySellers(Arrays.asList(searchedSeller));
                } else {
                    System.out.println("Seller with ID " + sellerId + " not found.");
                }
                break;
             // Inside handleSeller method
            case 4:
                System.out.print("Enter Seller ID to update: ");
                sellerId = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character

                Seller existingSeller = sellerDAO.getSellerById(sellerId);
                if (existingSeller != null) {
                    System.out.print("Enter new Seller Name: ");
                    sellerName = scanner.nextLine();
                    System.out.print("Enter new Company: ");
                    company = scanner.nextLine();
                    System.out.print("Enter new Email: ");
                    email = scanner.nextLine();
                    System.out.print("Enter new Password: ");
                    password = scanner.nextLine();

                    Seller updatedSeller = new Seller(sellerId, sellerName, company, email, password);
                    sellerDAO.updateSeller(updatedSeller);
                    System.out.println("Seller updated successfully!");
                } else {
                    System.out.println("Seller with ID " + sellerId + " not found.");
                }
                break;
            case 5:
                System.out.print("Enter Seller ID to delete: ");
                sellerId = scanner.nextInt();

                Seller sellerToDelete = sellerDAO.getSellerById(sellerId);
                if (sellerToDelete != null) {
                    sellerDAO.deleteSeller(sellerId);
                    System.out.println("Seller deleted successfully!");
                } else {
                    System.out.println("Seller with ID " + sellerId + " not found.");
                }
                break;

            default:
                System.out.println("Invalid choice.");
        }
    }

    private static void handleProduct(Scanner scanner, Connection connection) {
        ProductDAO productDAO = new ProductDAO(connection);
        int productId, sellerId;
        String productName, brand, description;
        int lowPrice, actualPrice, targetPrice;
        Date dateOfSale;

        System.out.println("\n==== Product Operations ====");
        System.out.println("1. Add Product");
        System.out.println("2. View All Products");
        System.out.println("3. Search Product by ID");
        System.out.println("4. Update Product");
        System.out.println("5. Delete Product by ID");
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.print("Enter Product ID: ");
                productId = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character
                System.out.print("Enter Product Name: ");
                productName = scanner.nextLine();
                System.out.print("Enter Brand: ");
                brand = scanner.nextLine();
                System.out.print("Enter Description: ");
                description = scanner.nextLine();
                System.out.print("Enter Seller ID: ");
                sellerId = scanner.nextInt();
                System.out.print("Enter Low Price: ");
                lowPrice = scanner.nextInt();
                System.out.print("Enter Actual Price: ");
                actualPrice = scanner.nextInt();
                System.out.print("Enter Target Price: ");
                targetPrice = scanner.nextInt();
                System.out.print("Enter Date of Sale (yyyy-MM-dd): ");
                String dateStr = scanner.next();
                dateOfSale = java.sql.Date.valueOf(dateStr);

                Product product = new Product(productId, productName, brand, description, sellerId, lowPrice, actualPrice, targetPrice, (java.sql.Date) dateOfSale);
                productDAO.addProduct(product);
                System.out.println("Product added successfully!");
                break;
            case 2:
                List<Product> products = productDAO.getAllProducts();
                displayProducts(products);
                break;
            case 3:
                System.out.print("Enter Product ID to search: ");
                productId = scanner.nextInt();

                Product searchedProduct = productDAO.getProductById(productId);
                if (searchedProduct != null) {
                    displayProducts(Arrays.asList(searchedProduct));
                } else {
                    System.out.println("Product with ID " + productId + " not found.");
                }
                break;
            case 4:
                System.out.print("Enter Product ID to update: ");
                productId = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character

                Product existingProduct = productDAO.getProductById(productId);
                if (existingProduct != null) {
                    System.out.print("Enter new Product Name: ");
                    productName = scanner.nextLine();
                    System.out.print("Enter new Brand: ");
                    brand = scanner.nextLine();
                    System.out.print("Enter new Description: ");
                    description = scanner.nextLine();
                    System.out.print("Enter new Seller ID: ");
                    sellerId = scanner.nextInt();
                    System.out.print("Enter new Low Price: ");
                    lowPrice = scanner.nextInt();
                    System.out.print("Enter new Actual Price: ");
                    actualPrice = scanner.nextInt();
                    System.out.print("Enter new Target Price: ");
                    targetPrice = scanner.nextInt();
                    System.out.print("Enter new Date of Sale (yyyy-MM-dd): ");
                    String newDateStr = scanner.next();
                    dateOfSale = java.sql.Date.valueOf(newDateStr);

                    Product updatedProduct = new Product(productId, productName, brand, description, sellerId, lowPrice, actualPrice, targetPrice, (java.sql.Date) dateOfSale);
                    productDAO.updateProduct(updatedProduct);
                    System.out.println("Product updated successfully!");
                } else {
                    System.out.println("Product with ID " + productId + " not found.");
                }
                break;
            case 5:
                System.out.print("Enter Product ID to delete: ");
                productId = scanner.nextInt();

                Product productToDelete = productDAO.getProductById(productId);
                if (productToDelete != null) {
                    productDAO.deleteProduct(productId);
                    System.out.println("Product deleted successfully!");
                } else {
                    System.out.println("Product with ID " + productId + " not found.");
                }
                break;
            default:
                System.out.println("Invalid choice.");
        }
    }

    private static void handleBidProduct(Scanner scanner, Connection connection) {
        BidProductDAO bidProductDAO = new BidProductDAO(connection);
        int bidProductId, productId, sellerId, buyerId;
        int bidPrice;
        String status;

        System.out.println("\n==== BidProduct Operations ====");
        System.out.println("1. Add BidProduct");
        System.out.println("2. View All BidProducts");
        System.out.println("3. Search BidProduct by ID");
        System.out.println("4. Update BidProduct");
        System.out.println("5. Delete BidProduct");
        System.out.println("6. Place a Bid");
        System.out.println("7. CurrentBid");
        System.out.println("8. Display Buyer Products");
        System.out.print("Enter your choice: ");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                System.out.print("Enter BidProduct ID: ");
                bidProductId = scanner.nextInt();
                System.out.print("Enter Product ID: ");
                productId = scanner.nextInt();
                System.out.print("Enter Seller ID: ");
                sellerId = scanner.nextInt();
                System.out.print("Enter Buyer ID: ");
                buyerId = scanner.nextInt();
                System.out.print("Enter Bid Price: ");
                bidPrice = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character
                System.out.print("Enter Status: ");
                status = scanner.nextLine();

                BidProduct bidProduct = new BidProduct(bidProductId, productId, sellerId, buyerId, status, bidPrice);
                bidProductDAO.addBidProduct(bidProduct);
                System.out.println("BidProduct added successfully!");
                break;
            case 2:
            	List<BidProduct> bidProducts = bidProductDAO.getAllBidProducts();
                BuyerDAO buyerDAO = new BuyerDAO(connection); // Create an instance of BuyerDAO
                List<Buyer> buyers = buyerDAO.getAllBuyers(); // Fetch all buyers using the instance
                displayBidProducts(bidProducts, buyers);
                break;
            case 3:
                System.out.print("Enter BidProduct ID to search: ");
                bidProductId = scanner.nextInt();

                BidProduct searchedBidProduct = bidProductDAO.getBidProductById(bidProductId);
                if (searchedBidProduct != null) {
                    displayBidProducts(Arrays.asList(searchedBidProduct));
                } else {
                    System.out.println("BidProduct with ID " + bidProductId + " not found.");
                }
                break;
            case 4:
                System.out.print("Enter BidProduct ID to update: ");
                bidProductId = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character

                BidProduct existingBidProduct = bidProductDAO.getBidProductById(bidProductId);
                if (existingBidProduct != null) {
                    System.out.print("Enter new Product ID: ");
                    productId = scanner.nextInt();
                    System.out.print("Enter new Seller ID: ");
                    sellerId = scanner.nextInt();
                    System.out.print("Enter new Buyer ID: ");
                    buyerId = scanner.nextInt();
                    System.out.print("Enter new Bid Price: ");
                    bidPrice = scanner.nextInt();
                    scanner.nextLine(); // Consume the newline character
                    System.out.print("Enter new Status: ");
                    status = scanner.nextLine();

                    BidProduct updatedBidProduct = new BidProduct(bidProductId, productId, sellerId, buyerId, status, bidPrice);
                    bidProductDAO.updateBidProduct(updatedBidProduct);
                    System.out.println("BidProduct updated successfully!");
                } else {
                    System.out.println("BidProduct with ID " + bidProductId + " not found.");
                }
                break;
            case 5:
                System.out.print("Enter BidProduct ID to delete: ");
                bidProductId = scanner.nextInt();

                BidProduct bidProductToDelete = bidProductDAO.getBidProductById(bidProductId);
                if (bidProductToDelete != null) {
                    bidProductDAO.deleteBidProduct(bidProductId);
                    System.out.println("BidProduct deleted successfully!");
                } else {
                    System.out.println("BidProduct with ID " + bidProductId + " not found.");
                }
                break;
            case 6:
                System.out.print("Enter BidProduct ID to place a bid: ");
                bidProductId = scanner.nextInt();
                System.out.print("Enter Buyer ID: ");
                buyerId = scanner.nextInt();
                System.out.print("Enter Bid Price: ");
                bidPrice = scanner.nextInt();

                bidProductDAO.placeBid(bidProductId, buyerId, bidPrice);
                break;
            case 7:
                System.out.print("Enter BidProduct ID to get the current bid price: ");
                bidProductId = scanner.nextInt();

                int currentBidPrice = bidProductDAO.getCurrentBidPrice(bidProductId);
                if (currentBidPrice >= 0) {
                    System.out.println("Current bid price for BidProduct with ID " + bidProductId + " is: " + currentBidPrice);
                }
                break;
            case 8:
                System.out.print("Enter Buyer ID to get products bought by the buyer: ");
                buyerId = scanner.nextInt();

                List<Product> productsBoughtByBuyer = bidProductDAO.getProductsBoughtByBuyer(buyerId);
                if (!productsBoughtByBuyer.isEmpty()) {
                    displayBuyerProducts(productsBoughtByBuyer);
                } else {
                    System.out.println("No products found for Buyer with ID " + buyerId + ".");
                }
                break;
            default:
                System.out.println("Invalid choice.");
        }
    }

    private static void displayBuyers(List<Buyer> buyers) {
        System.out.println("\n==== Buyer List ====");
        for (Buyer buyer : buyers) {
            System.out.println(buyer);
        }
    }

    private static void displaySellers(List<Seller> sellers) {
        System.out.println("\n==== Seller List ====");
        for (Seller seller : sellers) {
            System.out.println(seller);
        }
    }

    private static void displayProducts(List<Product> products) {
        System.out.println("\n==== Product List ====");
        for (Product product : products) {
            System.out.println(product);
        }
    }

    private static void displayBidProducts(List<BidProduct> bidProducts) {
        System.out.println("\n==== BidProduct List ====");
        for (BidProduct bidProduct : bidProducts) {
            System.out.println(bidProduct);
        }
    }
    private static void displayBidProducts(List<BidProduct> bidProducts, List<Buyer> buyers) {
        System.out.println("\n==== BidProduct List ====");
        for (BidProduct bidProduct : bidProducts) {
            int buyerId = bidProduct.getBuyerId();
            String buyerName = getBuyerNameById(buyerId, buyers);

            System.out.println("BidProduct ID: " + bidProduct.getBidProductId());
            System.out.println("Product ID: " + bidProduct.getProductId());
            System.out.println("Seller ID: " + bidProduct.getSellerId());
            System.out.println("Buyer ID: " + buyerId);
            System.out.println("Buyer Name: " + (buyerName != null ? buyerName : "N/A"));
            System.out.println("Bid Price: " + bidProduct.getBidPrice());
            System.out.println("Status: " + bidProduct.getStatus());
            System.out.println("--------------------");
        }
    }
    
    private static void displayWinners(List<BidProduct> bidProducts, List<Buyer> buyers) {
        System.out.println("\n==== Winners List ====");
        for (BidProduct bidProduct : bidProducts) {
            int buyerId = bidProduct.getBuyerId();
            String buyerName = getBuyerNameById(buyerId, buyers);

            System.out.print("BidProduct ID: " + bidProduct.getBidProductId());
            System.out.print(" ||  Winner ID: " + buyerId);
            System.out.print("  ||  Winner Name: " + (buyerName != null ? buyerName : "N/A"));
            System.out.println("  ||  Bid Price: " + bidProduct.getBidPrice()); 
            System.out.println("--------------------");
        }
    }
    private static void displayBuyerProducts(List<Product> products) {
        System.out.println("\n==== Products Bought By Buyer ====");
        for (Product product : products) {
            System.out.println("Product ID: " + product.getProductId());
            System.out.println("Product Name: " + product.getProductName());
            // Add other relevant product information to display if needed
            System.out.println("--------------------------------");
        }
    }
    private static String getBuyerNameById(int buyerId, List<Buyer> buyers) {
        for (Buyer buyer : buyers) {
            if (buyer.getBuyerId() == buyerId) {
                return buyer.getBuyerName();
            }
        }
        return null; // Buyer not found
    }
    private static void handleWinner(Scanner scanner,Connection connection) {
    	    BidProductDAO bidProductDAO = new BidProductDAO(connection);
    	    
    	    List<BidProduct> bidProducts = bidProductDAO.getAllBidProducts();
            BuyerDAO buyerDAO = new BuyerDAO(connection); // Create an instance of BuyerDAO
            List<Buyer> buyers = buyerDAO.getAllBuyers(); // Fetch all buyers using the instance
            displayWinners(bidProducts, buyers);
    	    
    }
}
