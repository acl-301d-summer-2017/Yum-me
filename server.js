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



app.get('/', (request,response)=>{
  response.sendFile('index.html', {root: './public'});
});
app.get('/monkeys',(request,response)=>{
  response.send('hello');
});
app.post('/geolocation/*', googleProxy);
app.get('/yelp/search', yelpSearchProxy);
app.get('/yelp/business', yelpBusinessProxy);
  
function googleProxy(request, response) {
  console.log(request.body);
  superRequest
    .post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.KEY}`)
    .end((err, resp) =>{ 
      console.log(resp.body)
      response.send(resp.body)});
} 



function yelpSearchProxy(request, response) {
  client.search(request.query)
    .then(resp => response.send(resp.jsonBody.businesses))
    .catch(err => console.error('YELP', err));
}

function yelpBusinessProxy(request, response) { // to get photos
  client.business(request.query.id)
    .then(resp => response.send(resp.jsonBody.photos))
    .catch(err => console.error('YELP Business', err));
}



app.listen(PORT,()=>console.log(`server started: ${PORT}`));