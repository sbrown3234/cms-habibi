DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS about;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS faq_sections;
DROP TABLE IF EXISTS faq_questions;

CREATE TABLE admin (
  username varchar(255),
  password varchar(255),
  secret varchar(255)
);

CREATE TABLE about (
  description text
);

CREATE TABLE rooms (
  id serial primary key,
  room_name varchar(255),
  description text,
  occupancy integer,
  price varchar(255),
  amenities text
);

CREATE TABLE images (
  id serial primary key,
  url varchar(255),
  page varchar(255),
  room_id integer
);

CREATE TABLE faq (
  id serial primary key,
  question varchar(255),
  answer text,
  section_name varchar(255)
);
