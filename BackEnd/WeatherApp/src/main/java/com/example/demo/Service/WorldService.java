package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.City;
import com.example.demo.Entity.Worldweather;
import com.example.demo.Repository.WorldRepo;

@Service
public class WorldService {
	@Autowired
	WorldRepo repo;
	
	public String addWtime(Worldweather ww) {
		repo.save(ww);
		return "Worldweather added";
	}
	
	public List<Worldweather> getWtime(){
		return repo.findAll();
	}
	
	public Optional<Worldweather> getWtimeById(int id){
		return repo.findById(id);
	}

}
