module.exports = (sequelize, type) => {
	return sequelize.define('keywords', {
		ID: {
			type: type.INTEGER.UNSIGNED,
			allowNull: false,
            primaryKey: true,
            autoIncrement: true,
			field: 'ID'
		},
		keyword: {
			type: type.TEXT,
			allowNull: true,
			defaultValue: null,
			fieldName: 'keyword'
		},
		status: {
			type: type.ENUM,
			allowNull: false,
			values: [ 'ACCEPTED', 'PENDING', 'REJECTED', 'FAILED' ],
			defaultValue: 'PENDING',
			fieldName: 'status'
		},
	},
	{
		timestamps: false,
		engine: 'InnoDB',
		charset: 'utf8',
		tableName: 'keywords'
	});
};
