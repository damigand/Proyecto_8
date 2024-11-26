const Cat = require('../models/Cat');
const { deleteImgCloudinary } = require('../../middlewares/multerDelete');

const getAllCats = async (req, res, next) => {
    try {
        const cats = await Cat.find().populate('siblings', '-siblings');
        return res.status(200).json(cats);
    } catch (error) {
        return res.status(500).json(`error (getAllCats): ${error}`);
    }
};

const getCatById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cat = await Cat.findById(id);

        return res.status(200).json(cat);
    } catch (error) {
        return res.status(500).json(`error (getCatById): ${error}`);
    }
};

const getCatByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const cats = await Cat.find({ name: { $regex: name, $options: 'i' } }).populate('siblings', '-siblings');

        if (!cats.length) return res.status(200).json('Could not find cats with that name.');

        return res.status(200).json(cats);
    } catch (error) {
        return res.status(500).json(`error (getCatByName): ${error}`);
    }
};

const getCatByBreed = async (req, res, next) => {
    try {
        const { breed } = req.params;
        const cats = await Cat.find({ breed: { $regex: breed, $options: 'i' } }).populate('siblings', '-siblings');

        if (!cats.length) return res.status(200).json('Could not find cats of that breed.');

        return res.status(200).json(cats);
    } catch (error) {
        return res.status(500).json(`error (getCatByBreed): ${error}`);
    }
};

const getCatByAge = async (req, res, next) => {
    try {
        const { age } = req.params;
        const cats = await Cat.find({ age: { $gte: age } });

        if (!cats.length) return res.status(200).json('Could not find cats with that age or over.').populate('siblings', '-siblings');

        return res.status(200).json(cats);
    } catch (error) {
        return res.status(500).json(`error (getCatByAge): ${error}`);
    }
};

const createCat = async (req, res, next) => {
    try {
        if (!req.body.name) return res.status(400).json('The cat needs to have a name.');
        if (!req.body.age) return res.status(400).json('The cat needs to have an age.');
        if (!req.body.breed) return res.status(400).json('The cat needs to have a breed.');

        var cat = new Cat({
            name: req.body.name,
            age: req.body.age,
            breed: req.body.breed,
            siblings: req.body.siblings,
        });

        if (req.file) {
            cat.img = req.file.path;
        }

        cat = await cat.save();
        return res.status(201).json(cat);
    } catch (error) {
        return res.status(500).json(`error (createCat): ${error}`);
    }
};

const editCat = async (req, res, next) => {
    try {
        const { id } = req.params;
        var cat = await Cat.findById(id);
        if (!cat) return res.status(404).json('Could not find the cat.');

        cat.name = req.body.name || cat.name;
        cat.age = req.body.age || cat.age;
        cat.breed = req.body.breed || cat.breed;

        //obtengo los "siblings" del gato.
        var siblings = req.body.siblings || [];

        //Si hay "siblings", filtro los strings vacíos y el id del propio gato
        //(Un gato no puede ser su propio "sibling")
        if (siblings) siblings = siblings.filter((s) => s && s != cat.id);

        //Si sigue habiendo "siblings", se los pongo al gato
        cat.siblings = siblings;

        if (req.file) {
            if (cat.img) deleteImgCloudinary(cat.img);

            cat.img = req.file.path;
        }

        const newCat = await cat.save();

        return res.status(200).json(newCat);
    } catch (error) {
        return res.status(500).json(`error (editCat): ${error}`);
    }
};

const deleteCat = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cat = await Cat.findByIdAndDelete(id);

        deleteImgCloudinary(cat.img);

        return res.status(200).json('Cat successfully deleted.');
    } catch (error) {
        return res.status(500).json(`error (deleteCat): ${error}`);
    }
};

module.exports = {
    getAllCats,
    getCatByAge,
    getCatByBreed,
    getCatByName,
    getCatById,
    createCat,
    editCat,
    deleteCat,
};
