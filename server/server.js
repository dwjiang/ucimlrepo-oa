require('module-alias/register')

const express = require("express");
const app = express();

require("@src/router")(app);

const port = 5000;
app.listen(port, () => {
	console.log(`Server up and runnning on port ${port}!`);
});
