#!/usr/bin/node

const request = require('request');

const filmNum = process.argv[2] + '/';
const filmURL = 'https://swapi-api.hbtn.io/api/films/';

// An API request to get film information
request(filmURL + filmNum, async function (err, res, body) {
  if (err) return console.error(err);

  // A parse response body which gets the list of character URLs
  const charURLList = JSON.parse(body).characters;

  // iterating through a list of character URLs and making a request to each URL to retrieve the corresponding character information.
  for (const charURL of charURLList) {
    await new Promise(function (resolve, reject) {
      request(charURL, function (err, res, body) {
        if (err) return console.error(err);

        // Extract the character details, display the character's name, and fulfill the promise to mark the task as complete.
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  }
};
