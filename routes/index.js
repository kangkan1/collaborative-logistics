var express = require('express');
var router = express.Router();
let keys = require('../config/keys')

const sqlite3 = require('sqlite3').verbose();
const { promisify } = require('util');
const db = new sqlite3.Database('db.sqlite');
// const all = promisify(db.all).bind(db);

async function getData() {
  try {
    const rows = await all('SELECT * FROM table_name');
    return rows;
    console.log(rows);
  } catch (err) {
    console.error(err);
  } finally {
    db.close();
  }
  return [];
}
/* GET home page. */
router.get('/', function(req, res, next) {

  // try {
  //   const rows = await all('SELECT * FROM table_name');
  //   console.log(rows);
  // } catch (err) {
  //   console.error(err);
  // } finally {
  //   db.close();
  // }
  // let users  = getData();
  // console.log("users:")
  // console.log(users)
  // console.log(keys)
  // try{
  //   const rows = await all('SELECT * FROM users');
  //   console.log("rows:")
  //   console.log(rows)
  //   res.render('index_ejs', { title: 'Collaborative Logistics', api_key:keys.get('google_map_api_key'), users:rows });
  // }catch (err) {
  //   console.error(err);
  // } finally {
  //   db.close();
  // }
  // all('SELECT * FROM users')
  //   .then(rows => {

  //     res.render('index_ejs', { title: 'Collaborative Logistics', api_key:keys.get('google_map_api_key'), users:rows });
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     res.status(500).send('Server Error');
  //   });
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server Error');
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
