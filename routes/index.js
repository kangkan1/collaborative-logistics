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

  Transportation.create({
    departure_time: new Date(),
    arrival_time: new Date(),
    _from: "New Delhi",
    _to: "Kurukshetra",
    other_stopping_details: "Karnal,Panipat",
    details: "This is pick up van. It is usually used for transportation of vegetables. It doesn't have freezer",
    occupancy_unit: "kg",
    occupancy_number:"1200",
    vehicle_details: "Mahindra Pick Up van, model 121",
    has_freezer: "No",
    rider_name:"Kunal"
  }).then((user) => console.log(user.toJSON()))
  .catch((error) => console.error(error));
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
    res.render('index_ejs', { title: 'Collaborative Logistics', api_key:keys.get('google_map_api_key'), users:rows });
  });
  // res.render('index_ejs', { title: 'Collaborative Logistics', api_key:keys.get('google_map_api_key') });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});


module.exports = router;
