package com.example.demo.Repository;

import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.SunInfo;


@Repository
public interface SunRepo extends JpaRepository<SunInfo, Integer> {
	
	@Query("SELECT s.sr,s.ss,s.ns,s.ne FROM SunInfo s "+
	"WHERE s.sd= :date")
	Object[] getTimeByDate(Date date);
}
