DROP DATABASE IF EXISTS project;

CREATE DATABASE project;

USE project;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS id_proof;
DROP TABLE IF EXISTS facility;
DROP TABLE IF EXISTS room_category;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS booking;
DROP TABLE IF EXISTS room_facility;
DROP TABLE IF EXISTS contact_us;
DROP TABLE IF EXISTS enquiry;
DROP TABLE IF EXISTS offers;

CREATE TABLE id_proof
(	id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(100)
);

CREATE TABLE users
(	user_id int PRIMARY KEY AUTO_INCREMENT, 
	first_name VARCHAR(100),
	last_name VARCHAR(100), 
	email VARCHAR(100) UNIQUE,
	password VARCHAR(100),
	idproof INT DEFAULT 1,
	created_timestamp TIMESTAMP default CURRENT_TIMESTAMP,
	gender VARCHAR(20),
	role VARCHAR(20) DEFAULT 'user',
	mobile VARCHAR(10),
	address VARCHAR(100),
	city VARCHAR(100),
	state VARCHAR(100),
	zipcode VARCHAR(6),
	FOREIGN KEY(idproof) REFERENCES id_proof(id)
);

CREATE TABLE facility
(	facility_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) ,
	description VARCHAR(1000) 
);

CREATE TABLE room_category
(	category_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) ,
	description VARCHAR(1000) 
);

CREATE TABLE rooms
(	room_id INT PRIMARY KEY AUTO_INCREMENT,
	category_id int DEFAULT 1,
	bed_count INT, 
	adult_count INT,
	child_count INT,
	price INT,
	description VARCHAR(1000),
	image VARCHAR(200),
	FOREIGN KEY(category_id) REFERENCES room_category(category_id)
);

CREATE TABLE booking
(	booking_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	room_id INT,
	booking_date TIMESTAMP default CURRENT_TIMESTAMP,
	check_in_date DATE ,
	check_out_date DATE ,
	remark VARCHAR(100),
	status VARCHAR(50) DEFAULT 'Pending',
	payment VARCHAR(50) DEFAULT 'Pending',
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	FOREIGN KEY(room_id) REFERENCES rooms(room_id)
);

CREATE TABLE room_facility
(	room_id INT,
	facility_id INT,
	FOREIGN KEY(facility_id) REFERENCES facility(facility_id),
	FOREIGN KEY(room_id) REFERENCES rooms(room_id)
);

CREATE TABLE contact_us
(   id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) ,
	mobile_no varchar(10) ,
	description VARCHAR(500) ,
	email varchar(50) 
);

CREATE TABLE enquiry
(	enquiry_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) ,
	last_name VARCHAR(100) , 
	mobile_no varchar(10) ,
	email varchar(50) ,
	remark VARCHAR(500) 
);

CREATE TABLE offers
(	offer_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) ,
	description VARCHAR(1000),
	time_period varchar(50)
);
