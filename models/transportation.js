const Sequelize = require('sequelize');
const sequelize = new Sequelize( {
  dialect: 'sqlite',
  storage: './db/db.sqlite'
});

const Transportation = sequelize.define('transportation', {
    id: {
      type: Sequelize.NUMBER,
      primaryKey: true
    },
    departure_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    arrival_time: {
        type: Sequelize.DATE
	  },
    _from: {
      type: Sequelize.STRING,
      allowNull: false
    },
    _to: {
      type: Sequelize.STRING(128),
      allowNull: false
    }, 
    other_stopping_details: {
      type: Sequelize.STRING(1024)
    },
    details: {
      type: Sequelize.STRING(1024)
    },
    occupancy_unit: {
      type: Sequelize.STRING(128)
    },
    occupancy_number: {
      type: Sequelize.STRING(128)
    },
    vehicle_details: {
      type: Sequelize.STRING(128)
    },
    has_freezer: {
      type: Sequelize.STRING(5)
    },
    rider_name: {
      type: Sequelize.STRING(128)
    }, 


  },{ timestamps: false });
  module.exports = Transportation;

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