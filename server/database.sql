CREATE DATABASE backend_schedule;

CREATE TABLE schedule(
    date_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    start_date CHAR(32),
    end_date CHAR(32),
    time VARCHAR(255)
);