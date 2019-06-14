// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/users", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function (dbd) {
      res.json(dbd);
    });
  });

  app.get("/api/getbabies", function (req, res) {
    if (req.user) {
      db.Baby.findAll({
        where: {
          account_id: req.user.id
        },
      }).then(function (dbd) {
        console.log("Found " + dbd);
        res.json(dbd);
      });
    } else {
      res.redirect("/login");
    }
  });

  app.post("/api/addbaby", function(request, response){
  console.log("TCL: request", request.user.id)
    if(request.user){
      db.Baby.create({
        baby_name: request.body.babyName,
        baby_birthday: request.body.babyBirthday,
        account_id: request.user.id
      })
      .then(function(dbBaby){
        response.json(dbBaby);
      });
    }
  });


  app.get("/api/getuser/:id", function (req, res) {
    console.log("Trying get with account id" + req.params.id)
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbd) {
      res.json(dbd);
    });
  });
  //**************************************************** */
  // *******sing-in sign-up related routes**************
  //**************************************************** */
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/baby-select");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  /************singup/signin realted routes are done******* */

}