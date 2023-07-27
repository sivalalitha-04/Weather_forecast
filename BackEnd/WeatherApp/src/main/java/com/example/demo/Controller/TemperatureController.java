package com.example.demo.Controller;

import java.sql.Date;
import java.sql.Time;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.SunRepo;
import com.example.demo.Repository.TempRepo;
import com.example.demo.dto.request.SearchRequest;
import com.example.demo.dto.response.SearchResponse;

@RestController
public class TemperatureController {
	
	@Autowired
	TempRepo trepo;
	
	@Autowired
	SunRepo srepo;
	
	@CrossOrigin("*")
	@PostMapping("/getTemperature")
	public SearchResponse getTemperature(@RequestBody  SearchRequest sreq) {
		String cityName=sreq.getCityName();
		Date date=sreq.getDate();
		Time time=sreq.getTime();		
		int tem= trepo.getTemperatureByPlaceNameAndDateTime(cityName, date, time);
		Object[] suninfo=srepo.getTimeByDate(date);
		
		SearchResponse sr=new SearchResponse();
		sr.setTem(tem);
		sr.setSuninfo(suninfo);
		
		return sr;
	}
}
