CREATE DATABASE job_system;
USE job_system;

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(100),
password VARCHAR(100),
role VARCHAR(20)
);
CREATE TABLE jobs(
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(200),
location VARCHAR(200),
quantity INT,
salary VARCHAR(100)
);
CREATE TABLE candidates(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
phone VARCHAR(20),
email VARCHAR(100),
job_id INT
);
SELECT * FROM jobs;
SELECT * FROM candidates;
CREATE TABLE candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    address VARCHAR(255),
    job_id INT,
    status VARCHAR(50) DEFAULT 'pending'
);
ALTER TABLE candidates
ADD address VARCHAR(255),
ADD status VARCHAR(50) DEFAULT 'pending';
SELECT * FROM candidates;
