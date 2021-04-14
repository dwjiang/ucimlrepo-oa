const DatasetKeywordsModel = require("@models/datasetKeywords");
const DonatedDatasetsModel = require("@models/donatedDatasets");
const KeywordsModel = require("@models/keywords");

const connection = require("@config/connection");
const Sequelize = require("sequelize");

const DatasetKeywords = DatasetKeywordsModel(connection, Sequelize);
const DonatedDatasets = DonatedDatasetsModel(connection, Sequelize);
const Keywords = KeywordsModel(connection, Sequelize);

module.exports = (app) => {
    // try out http://localhost:5000 and http://localhost:5000/api/keywords
    // look at Sequelize documentation for other model functions
	app.get("/", (req, res) => res.send("Welcome!"));
    app.get("/api/keyword", async (req, res) => {
        // this route gets a keyword and sends the keyword and its status as a JSON
        const keyword = await Keywords.findOne();
        return res.json({ keyword: keyword.keyword, status: keyword.status });
    });
    
    // add your own GET routes here
    
};
    
