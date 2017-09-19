"use strict";

const env = require('dotenv').config();
const express = require('express');
const app = express();
const superRequest = require('superagent');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'));

function proxy(request, response) {
  console.log('recieved yelp request' + request.body);
  superRequest
    .post(`https://api.yelp.com/v3/businesses/${request.params[0]}?term=food&location=portland`)
    .set('Authorization', `Bearer ${process.env.AUTHORIZATION}`)
    .end((err, resp) => response.send(resp));
}

app.get('/yelp/*', proxy)


app.listen(PORT,()=>console.log(`server started: ${PORT}`));