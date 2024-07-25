const express = require('express');
const bodyParser = require('body-parser');
const expenses = require('./routes/expensesRoutes'); 

const app = express();
app.use(bodyParser.json());
app.use('./expenses', expenses);


