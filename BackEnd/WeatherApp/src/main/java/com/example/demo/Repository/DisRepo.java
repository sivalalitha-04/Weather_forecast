package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Disaster;


@Repository
public interface DisRepo extends JpaRepository<Disaster, Integer> {

}
