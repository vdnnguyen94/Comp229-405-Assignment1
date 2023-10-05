const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

//Van Nguyen 301289600 COMP229-405

//render Index View for Home page
router.get('/', (req, res) => {
  const customerName = null;
  res.render('index', { title: 'Home', customerName: customerName });
});

//render About for About page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//render projects for project page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

//render service for service page
router.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});
//render contact for contact page

//obtain query for service, than use service to select requested service by customer
router.route('/contact')
  .get((req, res) => {
    res.render('contact', { title: 'Contact', service: req.query.service });
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
    const filePath = path.join(__dirname, '..', 'services', 'request.txt');

    // Append the form data to the request.txt file
    fs.appendFile(filePath, formDataString + '\n', (err) => {
      if (err) {
        console.error(err);
        return res.redirect('/error'); // Handle errors gracefully
      }

      // Redirect to the confirmation page
      res.render('index', { title: 'Home', customerName: customerName });
    });
  });

module.exports = router;

//Van Nguyen 301289600 COMP229-405