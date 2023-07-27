package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.City;
import com.example.demo.Repository.CityRepo;

@Service
public class CityService {
	@Autowired
	CityRepo repo;
	
	public String addCity(City city) {
		repo.save(city);
		return "City added";
	}
	
	public List<City> getCity(){
		return repo.findAll();
	}
	
	public Optional<City> getCityById(int id){
		return repo.findById(id);
	}
}
