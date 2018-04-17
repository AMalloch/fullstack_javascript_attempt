const express = require('express');
const parser = require('body-parser');
const server = express();

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err);
    return;
  }
                  // database name
  const db = client.db("coffee");

  console.log("Connected to database");

  // should expect name and coffee as a json when posting
  server.post("/api/coffees", function(req, res){
    // we havent created it but as we are accessing it will make it
    const coffeesCollection = db.collection("coffees");
    const coffeeToSave = req.body;

    coffeesCollection.save(coffeeToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      console.log("Saved to DB!");
      // create a responce ( good incase it times out! )
      res.status(201);
      res.json(coffeeToSave);
    })
  });

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });

});
