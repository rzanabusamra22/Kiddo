CREATE DATABASE db;

USE db;

CREATE TABLE admin (
  id int not null primary key auto_increment,
  username varchar(40) not null unique,
  password varchar(40) not null,
  email varchar(200) not null
);

CREATE TABLE supporter (
  id int not null primary key auto_increment,
  username varchar(40) not null unique,
  password varchar(40) not null,
  email varchar(200) not null unique,
  donation int not null
);

CREATE TABLE record (
  id int not null primary key auto_increment,
  link varchar(1000) not null unique,
  category varchar(50) not null,
  Thumbnail varchar(1000) not null unique
);

CREATE TABLE play (
  id int not null primary key auto_increment,
  link varchar(1000) not null unique,
  Thumbnail varchar(1000) not null unique
);

CREATE TABLE photo (
  id int not null primary key auto_increment,
  category varchar(50) not null,
  link varchar(1000) not null unique,
  sound varchar(1000) not null
);
