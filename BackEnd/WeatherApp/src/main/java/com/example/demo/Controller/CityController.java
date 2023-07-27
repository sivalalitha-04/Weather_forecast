package com.example.demo.Controller;

import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.City;
import com.example.demo.Entity.Dateandtime;
import com.example.demo.Entity.Temperature;
import com.example.demo.Repository.TempRepo;
import com.example.demo.Service.CityService;

@RestController
@CrossOrigin("*")
public class CityController {
	@Autowired
	CityService service;
	
	@Autowired
	TempRepo tempRepo;
	
	City c=new City();
	Dateandtime d=new Dateandtime();
	
	@CrossOrigin("*")
	@PostMapping("/city/create")
	public String create (@RequestBody City city) {
		return service.addCity(city);		
	}
	
	@CrossOrigin("*")
	@GetMapping("/city/get")
	public List<City> read(){
		return service.getCity();
	}
	
	@GetMapping("/city/{id}")
	public Optional<City> readById(@PathVariable int id){
		return service.getCityById(id);
	}
	
	
}
