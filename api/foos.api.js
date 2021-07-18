const express = require('express');
const router = express.Router();
let foos = require('../data/data.json')
// Create, Read, Update, Delete a foo in our db

// CREATE
router.post('/', function(req, res, next) {
  res.status(201).json({ foo: "newlyCreatedFoo" });
});

// READ foos
const filterableFooProperties = ['firstName', 'lastName', 'loiMagical']
fooController.get = (req, res) => {
  try {
    let returnedFoos = [...foos];
    for (const property of filterableFooProperties) {
      if (req.query[property]) {
        returnedFoos = returnedFoos.filter(
          (f) => f[property] === req.query[property],
        );
      }
    }
    res.status(200).send({
      numOfFoos: foos.slice(req.start, req.end).length,
      numOfFilteredFoos: returnedFoos.slice(req.start, req.end).length,
      foos: foos.slice(req.start, req.end),
      returnedFoos: returnedFoos.slice(req.start, req.end),
    });
  } catch (error) {
    console.log({ error });
    res.send("Oops, My bad.");
  }
};
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
