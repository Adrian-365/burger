DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE  burgers (
    id INT AUTO_INCREMENT NOT NULL,
     burger_name VARCHAR(60) NOT NULL UNIQUE,
     devoured BOOLEAN NOT NULL DEFAULT 0,
    date TIMESTAMP,
	PRIMARY KEY (id)
);