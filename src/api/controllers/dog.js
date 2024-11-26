const Dog = require('../models/Dog');
const { deleteImgCloudinary } = require('../../middlewares/multerDelete');

const getAllDogs = async (req, res, next) => {
    try {
        const dogs = await Dog.find().populate('siblings', '-siblings');
        return res.status(200).json(dogs);
    } catch (error) {
        return res.status(500).json(`error (getAllDogs): ${error}`);
    }
};

const getDogById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dog = await Dog.findById(id).populate('siblings', '-siblings');

        return res.status(200).json(dog);
    } catch (error) {
        return res.status(500).json(`error (getDogById): ${error}`);
    }
};

const getDogByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const dogs = await Dog.find({ name: { $regex: name, $options: 'i' } }).populate('siblings', '-siblings');

        if (!dogs.length) return res.status(200).json('Could not find dogs with that name.');

        return res.status(200).json(dogs);
    } catch (error) {
        return res.status(500).json(`error (getDogByName): ${error}`);
    }
};

const getDogByBreed = async (req, res, next) => {
    try {
        const { breed } = req.params;
        const dogs = await Dog.find({ breed: { $regex: breed, $options: 'i' } }).populate('siblings', '-siblings');

        if (!dogs.length) return res.status(200).json('Could not find dogs of that breed.');

        return res.status(200).json(dogs);
    } catch (error) {
        return res.status(500).json(`error (getDogByBreed): ${error}`);
    }
};

const getDogByAge = async (req, res, next) => {
    try {
        const { age } = req.params;
        const dogs = await Dog.find({ age: { $gte: age } }).populate('siblings', '-siblings');

        if (!dogs.length) return res.status(200).json('Could not find dogs with that age or over.');

        return res.status(200).json(dogs);
    } catch (error) {
        return res.status(500).json(`error (getDogByAge): ${error}`);
    }
};

const createDog = async (req, res, next) => {
    try {
        if (!req.body.name) return res.status(400).json('The dog needs to have a name.');
        if (!req.body.age) return res.status(400).json('The dog needs to have an age.');
        if (!req.body.breed) return res.status(400).json('The dog needs to have a breed.');

        var dog = new Dog({
            name: req.body.name,
            age: req.body.age,
            breed: req.body.breed,
            siblings: req.body.siblings,
        });

        if (req.file) {
            dog.img = req.file.path;
        }

        dog = await dog.save();
        return res.status(201).json(dog);
    } catch (error) {
        return res.status(500).json(`error (createDog): ${error}`);
    }
};

const editDog = async (req, res, next) => {
    try {
        const { id } = req.params;
        var dog = await Dog.findById(id);
        if (!dog) return res.status(404).json('Could not find the dog.');

        dog.name = req.body.name || dog.name;
        dog.age = req.body.age || dog.age;
        dog.breed = req.body.breed || dog.breed;

        //obtengo los "siblings" del perro.
        var siblings = req.body.siblings || [];

        //Si hay "siblings", filtro los strings vacíos y el id del propio perro
        //(Un perro no puede ser su propio "sibling")
        if (siblings) siblings = siblings.filter((s) => s && s != dog.id);

        //Si sigue habiendo "siblings", se los pongo al perro
        dog.siblings = siblings;

        if (req.file) {
            if (dog.img) deleteImgCloudinary(dog.img);

            dog.img = req.file.path;
        }

        const newDog = await dog.save();

        return res.status(200).json(newDog);
    } catch (error) {
        return res.status(500).json(`error (editDog): ${error}`);
    }
};

const deleteDog = async (req, res, next) => {
    try {
        const { id } = req.params;
        const dog = await Dog.findByIdAndDelete(id);

        deleteImgCloudinary(dog.img);

        return res.status(200).json('Dog successfully deleted.');
    } catch (error) {
        return res.status(500).json(`error (deleteDog): ${error}`);
    }
};

module.exports = {
    getAllDogs,
    getDogByAge,
    getDogByBreed,
    getDogByName,
    getDogById,
    createDog,
    editDog,
    deleteDog,
};
