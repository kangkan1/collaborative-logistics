const Sequelize = require('sequelize');
const sequelize = new Sequelize( {
  dialect: 'sqlite',
  storage: './db/db.sqlite'
});

// const Transportation = sequelize.define('users', {
//     id: {
//       type: Sequelize.NUMBER,
//       primaryKey: true
//     },
//     departure_time: {
//       type: Sequelize.DATE
//     }
//     arrival_time: {
//         type: Sequelize.DATE
//       }
//   },{ timestamps: false });
//   module.exports = User;

  /*
    Create statement

    CREATE TABLE transportation (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
   	departure_time datetime NOT NULL,
   	arrival_time datetime,
   	_from text NOT NULL,
   	_to text(128) NOT NULL,
   	other_stopping_details text(1024),
   	details text(1024),
   	occupancy_unit text(128),
   	occupancy_number text(15),
	vehicle_details text(128),
	has_freezer text(5),
	rating DECIMAL(10,3),
	rider_name text(128)
);
  */