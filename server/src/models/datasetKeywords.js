module.exports = (sequelize, type) => {
	return sequelize.define('dataset_keywords', {
		datasetKeywordsID: {
			type: type.INTEGER.UNSIGNED,
			allowNull: false,
            primaryKey: true,
            autoIncrement: true,
			field: 'datasetKeywordsID'
		},
		datasetID: {
			type: type.INTEGER.UNSIGNED,
			allowNull: false,
			field: 'datasetID'
		},
		keywordsID: {
			type: type.INTEGER.UNSIGNED,
			allowNull: false,
			field: 'keywordsID'
		},
	},
	{
		timestamps: false,
		engine: 'InnoDB',
		charset: 'utf8',
		tableName: 'dataset_keywords'
	});
};
