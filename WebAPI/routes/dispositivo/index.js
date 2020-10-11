var express = require('express');
var mongo = require('../../mongo');
var model = require('../../models/dispositivo')(mongo);
var controller = require('../../controllers/dispositivo')(model);
var router = express.Router();

router.get('/', controller.getAll.bind(controller));
router.get('/:id', controller.getById.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/', controller.update.bind(controller));
router.delete('/:id', controller.delete.bind(controller));

router.endpoint = '/api/dispositivo';
module.exports = router;


