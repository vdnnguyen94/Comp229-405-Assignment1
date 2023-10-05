const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; 


app.use(express.static('public'));
app.set('view engine', 'ejs');
//middleware handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
  console.log('Server running at http://localhost:3000/');
});
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  const customerName = null;
    res.render('index', {title: 'Home', customerName: customerName});
});
app.get('/about', (req, res) => {
  res.render('about', {title: 'About' });
});
app.get('/projects', (req, res) => {
  res.render('projects', {title: 'Projects' });
});
app.get('/services', (req, res) => {
  res.render('services', {title: 'Services' });
});

app.route('/contact')
  .get((req, res) => {
    res.render('contact', { title: 'Contact',service: req.query.service });
  })
  .post((req, res) => {
    const { customerName, phoneNumber, email, service, comments } = req.body;

    // Create a data object from the form input
    const formData = {
      customerName,
      phoneNumber,
      email,
      service,
      comments,
    };

    // Convert the form data to a JSON string
    const formDataString = JSON.stringify(formData, null, 2);

    // Define the path to the request.txt file
    const filePath = path.join(__dirname, 'services', 'request.txt');

    // Append the form data to the request.txt file
    fs.appendFile(filePath, formDataString + '\n', (err) => {
      if (err) {
        console.error(err);
        return res.redirect('/error'); // Handle errors gracefully
      }

      // Redirect to the confirmation page
      res.render('index', {title: 'Home', customerName: customerName});
    
  
  }); });