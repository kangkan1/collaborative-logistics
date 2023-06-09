var express = require('express');
var router = express.Router();
let keys = require('../config/keys')
let User = require('../models/users')
let Transportation = require('../models/transportation')

const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');
const db = new sqlite3.Database('./db/db.sqlite');
const all = promisify(db.all).bind(db);

const Sequelize = require('sequelize');
const sequelize = new Sequelize( {
  dialect: 'sqlite',
  storage: './db/db.sqlite'
});


// const sqlite3 = require('sqlite3').verbose();
// const { promisify } = require('util');
// const db = new sqlite3.Database('../db/db.sqlite');
// const all = promisify(db.all).bind(db);

/* GET home page. */
router.get('/', function(req, res, next) {

  // Transportation.create({
  //   departure_time: new Date(),
  //   arrival_time: new Date(),
  //   _from: "New Delhi",
  //   _to: "Kurukshetra",
  //   other_stopping_details: "Karnal,Panipat",
  //   details: "This is pick up van. It is usually used for transportation of vegetables. It doesn't have freezer",
  //   occupancy_unit: "kg",
  //   occupancy_number:"1200",
  //   vehicle_details: "Mahindra Pick Up van, model 121",
  //   has_freezer: "No",
  //   rider_name:"Kunal"
  // }).then((user) => console.log(user.toJSON()))
  // .catch((error) => console.error(error));


  // User.create({
  //   id:5,
  //   name:"Kunal"
  // }).then((user) => console.log(user.toJSON()))
  // .catch((error) => console.error(error));

  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error(err);
      // res.status(500).send('Server Error');
      res.render('error', {status:500})
      return;
    }

    console.log(keys)
    res.render('index_ejs', { title: 'Collaborative Logistics', api_key:keys.get('google_maps_api_key'), users:rows });
  });
  // res.render('index_ejs', { title: 'Collaborative Logistics', api_key:keys.get('google_map_api_key') });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});
router.get('/maps', function(req, res, next) {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error(err);
      // res.status(500).send('Server Error');
      res.render('error', {status:500})
      return;
    }

    console.log(keys)
    res.render('maps', { title: 'Maps', api_key:keys.get('google_maps_api_key'), users:rows });
  });
  //res.render('maps', { title: 'Maps', api_key:keys.get('google_map_api_key'), users:rows });
});

router.get('/transportation', function(req, res, next) {
  // console.log("id:")
  // console.log(req.params.id)
  db.all('SELECT * FROM transportation;', (err, rows) => {
    if (err) {
      console.error(err);
      // res.status(500).send('Server Error');
      res.render('error', {status:500})
      return;
    }

    // console.log(keys)
    res.render('transportation', { title: 'Collaborative Logistics | Transportation', transportation:rows });
  });
  // res.render('transportation', { title: 'transportation' });
});
router.get('/transportation/view/:id', function(req, res, next) {
  console.log("id:")
  console.log(req.params.id)
  db.all('SELECT * FROM transportation where id='+req.params.id+';', (err, rows) => {
    console.log(rows)
    if (err) {
      // console.log("error:")
      // console.error(err);
      // res.status(500).send('Server Error');
      res.render('error', {status:500})
      return;
    }

    // console.log(keys)
    res.render('transportation_view', { title: 'Collaborative Logistics | Transportation', transportation:rows, api_key:keys.get('google_maps_api_key')});
  });
  // res.render('transportation', { title: 'transportation' });
});



module.exports = router;
