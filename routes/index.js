var express = require('express');
var router = express.Router();
let keys = require('../config/keys')

const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');
const db = new sqlite3.Database('../db/db.sqlite');
const all = promisify(db.all).bind(db);

/* GET home page. */
router.get('/', function(req, res, next) {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error(err);
      // res.status(500).send('Server Error');
      res.render('error', {status:500})
      return;
    }
    res.render('index_ejs', { title: 'Collaborative Logistics', api_key:keys.get('google_map_api_key'), users:rows });
  });
  // res.render('index_ejs', { title: 'Collaborative Logistics', api_key:keys.get('google_map_api_key') });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

module.exports = router;
