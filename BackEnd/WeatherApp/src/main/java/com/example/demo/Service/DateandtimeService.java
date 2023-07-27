package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Entity.Dateandtime;
import com.example.demo.Repository.DateandtimeRepo;

@Service
public class DateandtimeService {
	@Autowired
	DateandtimeRepo repo;
	
	public String addDT(Dateandtime dt) {
		repo.save(dt);
		return "Dateandtime added";
	}
	
	public List<Dateandtime> getDT(){
		return repo.findAll();
	}
	
	public Optional<Dateandtime> getDTById(int id){
		return repo.findById(id);
	}
}
