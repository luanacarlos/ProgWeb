const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');

router.get('/' , mainController.index);
router.get('/sobre', mainController.sobre);

module.exports = router;
