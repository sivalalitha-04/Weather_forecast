package com.example.demo.Controller;

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
import com.example.demo.Entity.Worldweather;
import com.example.demo.Service.WorldService;

@RestController
@CrossOrigin("*")
public class WorldController {
	@Autowired
	WorldService service;
	
	@CrossOrigin("*")
	@PostMapping("/world/create")
	public String create (@RequestBody Worldweather ww) {
		return service.addWtime(ww);
	}
	
	@CrossOrigin("*")
	@GetMapping("/world/get")
	public List<Worldweather> read(){
		return service.getWtime();
	}
	
	@CrossOrigin("*")
	@GetMapping("/world/{id}")
	public Optional<Worldweather> readById(@PathVariable int id){
		return service.getWtimeById(id);
	}
}
