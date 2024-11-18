const express = require('express');
const router = express.Router();
const controller = require('../controllers/dog');
const { uploadImg } = require('../../middlewares/multerUpload');

router.get('/', controller.getAllDogs);

router.get('/:id', controller.getDogById);

router.get('/name/:name', controller.getDogByName);

router.get('/breed/:breed', controller.getDogByBreed);

router.get('/age/:age', controller.getDogByAge);

router.post('/create', uploadImg('Dogs').single('img'), controller.createDog);

router.put('/edit/:id', uploadImg('Dogs').single('img'), controller.editDog);

router.delete('/delete/:id', controller.deleteDog);

module.exports = router;
