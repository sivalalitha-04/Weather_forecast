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

import com.example.demo.Entity.Dateandtime;
import com.example.demo.Service.DateandtimeService;

@RestController
@CrossOrigin("*")
public class DateandtimeController {
	@Autowired
	DateandtimeService service;
	
	@CrossOrigin("*")
	@PostMapping("/dt/create")
	public String create (@RequestBody Dateandtime dt) {
		return service.addDT(dt);		
	}
	
	@CrossOrigin("*")
	@GetMapping("/dt/get")
	public List<Dateandtime> read(){
		return service.getDT();
	}
	
	@GetMapping("/dt/{id}")
	public Optional<Dateandtime> readById(@PathVariable int id){
		return service.getDTById(id);
	}
}
