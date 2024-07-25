const express = require('express');
const bodyParser = require('body-parser');
const emails = require('./routes/emailRoutes')

const app = express();
app.use(bodyParser.json());
app.use('./emails', emails);




// const express = require('express');
// const emails = require('../controllers/email_controller');

// const router = express.Router();
// router.use('/', emails);

// module.exports = router;
