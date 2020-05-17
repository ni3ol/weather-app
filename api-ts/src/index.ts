import express from "express";
import request from 'request'
import cors from "cors";

const app = express();

app.use(cors());

app.get('/test', function(req, res: any) {
  console.log(req)
  request({
    uri: 'https://fcc-weather-api.glitch.me/api/current',
    qs: {
      lat: req.query.lat,
      lon: req.query.lon
    }

  }).pipe(res);
});

app.listen(9000);
