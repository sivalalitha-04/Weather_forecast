package com.example.demo.Controller;


import java.sql.Date;
import java.sql.Time;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.City;
import com.example.demo.Entity.Dateandtime;
import com.example.demo.Entity.Disaster;
import com.example.demo.Entity.LocationInfo;
import com.example.demo.Entity.SunInfo;
import com.example.demo.Entity.Temperature;
import com.example.demo.Repository.CityRepo;
import com.example.demo.Repository.DateandtimeRepo;
import com.example.demo.Repository.DisRepo;
import com.example.demo.Repository.InfoRepo;
import com.example.demo.Repository.SunRepo;
import com.example.demo.Repository.TempRepo;
import com.example.demo.Service.DateandtimeService;
import com.example.demo.dto.request.InputRequst;
import com.example.demo.dto.request.SearchRequest;
import com.example.demo.dto.response.SearchResponse;

@RestController
@CrossOrigin("*")
public class InputDataController {
	@Autowired
	CityRepo crepo;
	
	@Autowired
	DateandtimeRepo drepo;
	
	@Autowired
	DateandtimeService dservice;
	
	@Autowired
	TempRepo trepo;
	
	@Autowired
	InfoRepo lrepo;
	
	@Autowired
	DisRepo disrepo;
	
	@Autowired
	SunRepo srepo;
	
	City c = new City();
	Dateandtime d = new Dateandtime();
	@CrossOrigin("*")
	@PostMapping("/post/details")
	public void create(@RequestBody InputRequst request) {
        c.setCityName(request.getCityName());
        c.setPincode(request.getPincode());
        c.setGeoCoord(request.getGeoCoord());
        c = crepo.save(c);
        
        d.setCtId(c.getCId());
        d.setDate(request.getDate());
        d.setTime(request.getTime());
        d=drepo.save(d);
        
        SunInfo s=new SunInfo();
        s.setSd(request.getDate());
        s.setSr(request.getSr());
        s.setSs(request.getSs());
        s.setNs(request.getNs());
        s.setNe(request.getNe());
        s=srepo.save(s);
        
        Temperature t=new Temperature();
        t.setDId(d.getDtId());
        t.setCel(request.getCel());
        t.setFah(request.getFah());
        t=trepo.save(t);
        
        LocationInfo l=new LocationInfo();
        l.setTId(t.getTempId());
        l.setPrecip(request.getPrecip());
        l.setHum(request.getHum());
        l.setVisibility(request.getVisibility());
        l.setWindSpeed(request.getWindSpeed());
        l.setWindDir(request.getWindDir());
        l=lrepo.save(l);
        
        Disaster dis=new Disaster();
        dis.setTId(l.getTId());
        dis.setDisVal(request.getDisVal());
        dis=disrepo.save(dis);
        
    }
	
}
