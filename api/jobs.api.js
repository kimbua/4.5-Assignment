const express = require('express');
const jobsController = require('../controllers/jobsController');
const jobController = require('../controllers/jobController');

const router = express.Router();

// Create, Read, Update, Delete a foo in our db

// READ jobs
router.get('/', jobsController.get);

// CREATE job
router.post('/', jobsController.post);


// READ job
router.get("/:id", jobController.get);

// UPDATE job
router.patch('/:id', );

// DELETE job
router.delete('/:id',jobController.delete);

module.exports = router;


