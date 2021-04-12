
const Sequelize = require('sequelize');

// fill in ur db credentials here
const db = {
	username: 'root',
	password: '',
	database: 'ucimlrepo',
	host: 'localhost',
	dialect: 'mysql'
};

module.exports = new Sequelize(
    db.database, db.username, db.password, {
        host: db.host, dialect: db.dialect
    }
);
