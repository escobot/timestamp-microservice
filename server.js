'use strict';

const express = require('express');
const app = express();

app.get('/*', function (req, res) {
  const parameter = req.originalUrl.substring(1);
  let unix = null;
  let natural = null;

  const isUnix = new RegExp(/^\d{1,11}$/).test(parameter);
  const isNatural = new RegExp(/^[a-zA-Z]+%20\d{1,2},%20\d{4}/).test(parameter);

  if (isUnix) {
      unix = parseInt(parameter);
      const timeString = new Date(unix* 1000).toDateString();
      const day = timeString.split(" ")[2];
      const month = timeString.split(" ")[1];
      const year = timeString.split(" ")[3];
      natural = month + " " + day + ", " + year;
  }

  if (isNatural) {
      natural = parameter.replace(/%20/g, " ")
      unix = Math.round((new Date(natural)).getTime() / 1000);
  }

  res.send({unix, natural});
})

app.listen(3000);
console.log('App running on http://localhost:3000');