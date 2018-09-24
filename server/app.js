/*
import * as express from "express";
import * as bodyparser from "body-parser";
import * as mongodb from "mongodb";
import {ObjectID} from "mongodb";
*/
 var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID,
    fs = require('fs'),
    config = require('./config');
let CONTACTS_COLLECTION = "contacts";
let request = require('request');

const  app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
const __url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key="

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// let db;
// // const db = mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds125068.mlab.com:25068/api-test2');
// // Connect to the database before starting the application server.
// mongodb.MongoClient.connect('mongodb://admin:admin123@ds159978.mlab.com:59978/hogar-barber'|| "mongodb://localhost:27017/test", function (err, client) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   // Save database object from the callback for reuse.
//   db = client.db();
//   console.log("Database connection ready");

// console.log(__url + config.api_key);
/*let gPlacesData = (req, res) => {
   request.get(__url + config.api_key, (err, response, body) => {
     if(!err && response.statusCode == 200) {
       data = JSON.parse(body);
       console.log('hi');
       res.send(data);
     }
   })
  console.log(__url + __config.api_key);

}
*/
app.get('/', function(req, res) {
    request.get(__url+config.api_key, (err, response, body) => {
      if(!err && response.statusCode==200) {
        
        
        res.send(data);
      }
    });
});
/*
request.get(__url+config.api_key, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
*/
  // Initialize the app.
  const server = app.listen(process.env.PORT || 5050, function () {
    const port = server.address().port;
    console.log("App now running on port", port);
  });
  