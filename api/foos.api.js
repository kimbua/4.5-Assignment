const express = require('express');
const router = express.Router();

// Create, Read, Update, Delete a foo in our db

// CREATE
router.post('/', function(req, res, next) {
  res.status(201).json({ foo: "newlyCreatedFoo" });
});

// READ foos
router.get('/', function(req, res, next) {
  res.status(200).json({ foos: ["spam", "ham", "eggs", "foo", "bar"] });
});

// READ foo
router.get("/:id", function (req, res, next) {
  res.status(200).json({ foo: 'individualFoo' });
});

// UPDATE
router.patch('/:id', function(req, res, next) {
  res.status(202).json({ foo: "updatedFoo" });
});

// DELETE
router.delete('/:id', function(req, res, next) {
  res.status(202).json({ foo: "deletedFoo" });
});

module.exports = router;
