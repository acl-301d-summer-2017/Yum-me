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


app.get('/yelp/search', yelpSearchProxy)
app.get('/yelp/business', yelpBusinessProxy)

function yelpSearchProxy(request, response) {
  
  client.search(request.query)
    .then(resp => response.send(resp.jsonBody.businesses))
    .catch(err => console.error(err));
}

function yelpBusinessProxy(request, response) { // to get photos
  client.business(request.query.id)
    .then(resp => response.send(resp.jsonBody.photos))
    .catch(err => console.error(err));
}


app.listen(PORT,()=>console.log(`server started: ${PORT}`));