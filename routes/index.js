// require express
const express = require('express');
// require router
const router = express.Router();

const homeController = require('../controllers/home_controller');
console.log("Router Loaded");

// Navigate to controller->home_controller for routes functionality
router.get('/', homeController.home);

// for create-todo url navigate to create.js
router.use('/create-todo', require('./create'));

//for delete-todo url navigate to delete.js
router.use('/delete-todo', require('./delete'));

module.exports = router;