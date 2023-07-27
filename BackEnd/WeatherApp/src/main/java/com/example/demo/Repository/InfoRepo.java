package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.LocationInfo;

@Repository
public interface InfoRepo extends JpaRepository<LocationInfo, Integer> {

}
