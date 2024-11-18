const express = require('express');
const router = express.Router();
const controller = require('../controllers/cat');
const { uploadImg } = require('../../middlewares/multerUpload');

router.get('/', controller.getAllCats);

router.get('/:id', controller.getCatById);

router.get('/name/:name', controller.getCatByName);

router.get('/breed/:breed', controller.getCatByBreed);

router.get('/age/:age', controller.getCatByAge);

router.post('/create', uploadImg('Cats').single('img'), controller.createCat);

router.put('/edit/:id', uploadImg('Cats').single('img'), controller.editCat);

router.delete('/delete/:id', controller.deleteCat);

module.exports = router;
