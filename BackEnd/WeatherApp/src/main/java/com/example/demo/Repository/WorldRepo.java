package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Worldweather;

public interface WorldRepo extends JpaRepository<Worldweather, Integer> {

}
