package com.example.demo.Entity;
import java.sql.*;
public class Database {
	static Connection con;
	public static Connection createc() 
		{	
			try 
			{
				Class.forName("com.mysql.cj.jdbc.Driver");
				
				String user = "root"; 
				String password = "Lalli@2004"; 
				String url = "jdbc:mysql://localhost:3306/auction";
				con = DriverManager.getConnection(url,user,password);
			}
			catch(Exception e) 
			{
				e.printStackTrace();
			}
			return con;
		}
}