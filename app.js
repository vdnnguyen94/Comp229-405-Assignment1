//Van Nguyen 301289600 COMP229-405
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log('Server running at http://localhost:3000/');
});

// Include routes from routes/index.js
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

//Van Nguyen 301289600 COMP229-405