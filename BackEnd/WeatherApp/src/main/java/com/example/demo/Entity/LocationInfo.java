package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class LocationInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int lId;
	private int precip;
	private int hum;
	private int windSpeed;
	private int windDir;
	private int visibility;
	private int tId;
}
