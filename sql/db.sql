DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS address;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS faq_sections;
DROP TABLE IF EXISTS faq_questions;

CREATE TABLE admin (
  username varchar(255),
  password varchar(255),
  secret varchar(255)
);

CREATE TABLE address (
  name varchar(255),
  street varchar(255),
  city varchar(255),
  state varchar(255),
  country varchar(255),
  zip integer,
  phone varchar(255),
  email varchar(255)
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

CREATE TABLE faq_sections (
  id serial primary key,
  section_name varchar(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE faq_questions (
  id serial primary key,
  question varchar(255),
  answer text,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  section_name varchar(255)
);
