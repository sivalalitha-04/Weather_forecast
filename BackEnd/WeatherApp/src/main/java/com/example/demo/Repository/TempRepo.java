package com.example.demo.Repository;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Temperature;

@Repository
public interface TempRepo extends JpaRepository<Temperature, Integer> {
	@Query("SELECT t.cel FROM Temperature t JOIN Dateandtime d ON d.dtId = t.dId " +
	           "JOIN City c ON c.cId = d.ctId WHERE c.cityName = :cityName AND d.date = :date " +
	           "AND d.time = :time")
	    int getTemperatureByPlaceNameAndDateTime(String cityName, Date date, Time time);
	}
