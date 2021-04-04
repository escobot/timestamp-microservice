# Timestamp Microservice

## Objective

Build a full stack app that is functionally similar to this: https://timestamp-ms.herokuapp.com/.

## Requirements

* User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

* User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

* User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

## Notes

Requirements:
- NodeJS
- NPM
- Docker (optional)

Run using NPM:
```bash
# install dependencies
npm install

# run app at localhost:3000
npm start
```

Run using Docker:
```bash
# build image
docker build -t pbgnz/timestamp-microservice .

# run image
docker run -p 49160:3000 -d pbgnz/timestamp-microservice
```

Usage
```bash
# natural language date request
http://localhost:3000/Dec 14, 2015

# unix date request
http://localhost:3000/1450137600

# expected response
{ "unix": 1450137600, "natural": "December 15, 2015" }
```