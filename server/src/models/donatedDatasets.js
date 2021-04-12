
module.exports = (sequelize, type) => {
	return sequelize.define('donated_datasets', {
		ID: {
			type: type.INTEGER.UNSIGNED,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			field: 'ID'
		},
		Name: {
			type: type.STRING(90),
			allowNull: false,
			fieldName: 'Name'
		},
		Abstract: {
			type: type.STRING(200),
			allowNull: false,
			fieldName: 'Abstract'
		},
	},
	{
		timestamps: false,
		engine: 'InnoDB',
		charset: 'utf8',
		tableName: 'donated_datasets'
	});
};
