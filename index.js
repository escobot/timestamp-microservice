const express = require('express');
const app = express();

app.get('/*', function (req, res) {
  let parameter = req.originalUrl.substring(1);
  let unix = null;
  let natural = null;

  let isUnix = new RegExp(/^\d{0,11}$/).test(parameter);
  let isNatural = new RegExp(/^[a-zA-Z]+%20\d{1,2},%20\d{4}/).test(parameter);

  if (isUnix) {
      unix = parseInt(parameter);
      timeString = new Date(unix* 1000).toDateString();
      day = timeString.split(" ")[2];
      month = timeString.split(" ")[1];
      year = timeString.split(" ")[3];
      natural = month + " " + day + ", " + year;
  }

  if (isNatural) {
      natural = parameter.replace(/%20/g, " ")
      unix = Math.round((new Date(natural)).getTime() / 1000);
  }

  res.send({unix, natural});
})

app.listen(3000);