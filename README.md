# UCI Machine Learning Repository Coding Challenge

Want to join the [UCI Machine Learning Repository](https://archive-beta.ics.uci.edu/) team?

## What to Do?
For this challenge, we want you to create a search for a dataset by keyword.

You should be able to enter a keyword on the website, and it should display the dataset name(s) and abstract(s) that map to the specific keyword. For example, if the user enters "fairness" into the search box, then it should display the "Adult" dataset and its abstract.

This GitHub repository contains 3 directories: `web`, `server`, and `db`. 
- The `web` directory contains some starter code for a ReactJS frontend, using Create React App. 
- The `server` directory contains some starter code for a backend REST API, including database connection code and the ORMs for the database tables. 
- The `db` directory that contains 3 CSVs with the data for a database. 
  - `db/keywords.csv` contains a list of keywords and their ids.
  - `db/donated_datasets.csv` contains a list of dataset ids, names and abstracts. 
  - `db/dataset_keywords.csv` contains the mappings from dataset to keyword.
  
You can use `npm run start` to start up both the `web` and the `server` in their respective directories.

## Procedure
- To get started, you will have to create a MySQL database with a table for each of the files given. 
- You will then create some backend REST API route in Node.js and Express and use Sequelize to connect your backend to the database. You will only need one route in the backend which gets the data for a given search parameter. 
- Lastly, you will create a simple interface using ReactJS and any libraries you would like for a search function. I would recommend using Axios to make the GET request from the frontend to the backend and Material-UI for frontend React components (which is what we use for UCI’s new machine learning repository).

Remember that this is not anything super formal. Don’t spend too much time in beautifying the webpage, but you should make the website pretty with some basic css (and optionally, a React UI components library like material-ui). The search function should be working and the website should display the datasets and their abstracts in a readable format.

## Submission

We would like you to clone the repository, commit your code to a private GitHub repository, send us the link to the repository, and give us view access permissions ([dwjiang](https://github.com/dwjiang) and [parmikmehra](https://github.com/parmikmehra)).

The deadline is **11:59 PM June 2nd PDT** to finish the challenge. You may work on the challenge until the deadline.

After the deadline, let's set up some time, so you can demonstrate your project’s functionality on a Zoom call with us. This project may take you some time, but doing so will teach you all of the technologies we use in our stack.

## Useful Links
- Creating a react app (https://create-react-app.dev/docs/getting-started)

- GET vs POST request (https://www.youtube.com/watch?v=BcpI1hYmGj4)

- Axios for requests from frontend (https://www.npmjs.com/package/axios)

- Basic Routing in Express (https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)

- Getting started with Sequelize (https://sequelize.org/master/manual/getting-started.html)

- How to create a database model with Sequelize (https://sequelize.org/master/manual/model-basics.html)

 - Simple querying in Sequelize (https://sequelize.org/master/manual/model-querying-basics.html)

## Problems/Questions?

Feel free to email us (dwjiang@uci.edu and parmikm@uci.edu) if something is not clear or if you have any questions about the challenge.
