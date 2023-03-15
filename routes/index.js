var express = require('express');
var router = express.Router();
let keys = require('../config/keys')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(keys)
  res.render('index_ejs', { title: 'Collaborative Logistics', api_key:keys.get('google_maps_api_key') });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

module.exports = router;
