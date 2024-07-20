const express = require('express');
const bodyParser = require('body-parser');
const expenses = require('./routes/expensesRoutes'); 

const app = express();
app.use(bodyParser.json());
app.use('./expenses', expenses);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

