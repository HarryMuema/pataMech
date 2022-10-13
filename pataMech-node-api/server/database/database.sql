CREATE DATABASE patamech;

CREATE TABLE userName(
    userId SERIAL PRIMARY KEY NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    userEmail VARCHAR(255) NOT NULL,
    userPassword VARCHAR(255) NOT NULL
);

CREATE TABLE address(
    addressId SERIAL PRIMARY KEY NOT NULL,
    address1 VARCHAR(100) NOT NULL,
    address2 VARCHAR(100) NOT NULL
);

CREATE TABLE partDealers(
    dealerId SERIAL PRIMARY KEY NOT NULL,
    dealerName VARCHAR(100) NOT NULL
);
