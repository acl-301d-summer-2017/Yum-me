"use strict";

const env = require('dotenv').config();
const express = require('express');
const app = express();
const superRequest = require('superagent'); //request alt
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.AUTHORIZATION);
const bodyParser = require('body-parser');
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'));

function yelpProxy(request, response) {
  response.send(request.query)
  client.search(request.query)
    .then(resp => response.send(resp))
    .catch(err => console.error(err));

}

client.search({
  categories: "Restaurants",
  limit: "20",
  location: "Portland",
  open_now: "false",
  price: "1, 2, 3",
  radius: "2000",
  term: "delivery"
})
  .then(resp => console.log(resp))
  .catch(err => console.error(err));

app.get('/yelp/*', yelpProxy)


app.listen(PORT,()=>console.log(`server started: ${PORT}`));