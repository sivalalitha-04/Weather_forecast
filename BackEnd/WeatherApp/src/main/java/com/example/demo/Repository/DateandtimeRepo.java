package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Dateandtime;
@Repository
public interface DateandtimeRepo extends JpaRepository<Dateandtime, Integer> {

}
