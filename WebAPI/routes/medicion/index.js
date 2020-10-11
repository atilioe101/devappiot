var express = require('express');
var mongo = require('../../mongo');
var model = require('../../models/medicion')(mongo);
var controller = require('../../controllers/medicion')(model);
var router = express.Router();

router.get('/:dispId', controller.getByDispId.bind(controller));

router.endpoint = '/api/medicion';
module.exports = router;
