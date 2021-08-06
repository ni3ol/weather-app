import express from "express";
import request from 'request'
import cors from "cors";

const app = express();

app.use(cors());

app.get('/test', async function(req, res) {
  console.log(req)
  const response = await request({
    uri: 'https://fcc-weather-api.glitch.me/api/current',
    qs: {
      lat: req.query.lat,
      lon: req.query.lon
    }
  })
  console.log(response)
  res.send(response)
});

app.listen(9000);


