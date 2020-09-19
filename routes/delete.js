const express = require('express');
const router = express.Router();

const deleteController = require('../controllers/delete_controller');

//for delete-todo/ navigate to controller->delete_controller
router.get('/', deleteController.delete);

module.exports = router;