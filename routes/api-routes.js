// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Import the model (burgerModel.js) to use its database functions.
// var Burger = require("../models/burgerModel.js");

//---------do I need both of these???? I don't think I need the one above...think the one below will pull in all.

// go use index.js to fetch all models (all .js files) in the models folder and put them in the db.
var db = require("./models");
var express = require('express');

// Routes
// =============================================================
module.exports = function(app) {

  var router = app.Router();
// Create all our routes and set up logic within those routes where required.
  // Finding all Burgers, and then returning them to the user as JSON.
  // Sequelize queries are asynchronous, which helps with perceived speed.
  // If we want something to be guaranteed to happen after the query, we'll use
  // the .then function
  router.get("/", function(req, res) {
        Burger.findAll({}).then(function(results){
            // results are available to us inside the .then
            res.json(results);
        }).catch(function(error) {
            throw error;
        }); 
  });

  // add a burger
  router.post("/api/burgers", function(req, res) {

        // adding server-side validation for burger_name not null and burger_name < 36 chars
        console.log("req object: " + req.body.name);
        if(req.body.name === '' || req.body.name.length > 35) {
        //   return res.status(404).end();
        return res.status(404).json('name validation failed').end();
        } else { // if it passes validation, insert the burger

            console.log("Burger Data: ");
            console.log(req.body);

            Burger.create({
            burger_name: req.body.name,
            created_at: req.body.created_at
            }).then(function(results) {
            // `results` here would be the newly created burger
            res.end();
            });
        }
  });
  // models.user.update({ venue_ids: venueIds },{where:{id: id }}).then( result => { res.json(result)});

  router.put("/api/burgers/:id", function(req, res) {
        Burger.update({
            devoured: req.body.devoured  
        }, {where: {id: req.body.id }
        })
        .then(function(results){
                if (result.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
        });
    });
};