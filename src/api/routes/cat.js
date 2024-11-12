const express = require('express');
const router = express.Router();
const controller = require('../controllers/cat');

router.get('/', controller.getAllCats);

router.get('/:id', controller.getCatById);

router.get('/name/:name', controller.getCatByName);

router.get('/breed/:breed', controller.getCatByBreed);

router.get('/age/:age', controller.getCatByAge);

router.post('/create', controller.createCat);

router.put('/edit/:id', controller.editCat);

router.delete('/delete/:id', controller.deleteCat);

module.exports = router;
