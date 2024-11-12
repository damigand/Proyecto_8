const Dog = require('../models/Dog');

const getAllDogs = async (req, res, next) => {
    try {
        return res.status(200).json('getAllDogs');
    } catch (error) {
        return res.status(500).json(`error (getAllDogs): ${error}`);
    }
};

const getDogById = async (req, res, next) => {
    try {
        return res.status(200).json('getDogById');
    } catch (error) {
        return res.status(500).json(`error (getDogById): ${error}`);
    }
};

const getDogByName = async (req, res, next) => {
    try {
        return res.status(200).json('getDogByName');
    } catch (error) {
        return res.status(500).json(`error (getDogByName): ${error}`);
    }
};

const getDogByBreed = async (req, res, next) => {
    try {
        return res.status(200).json('getDogByBreed');
    } catch (error) {
        return res.status(500).json(`error (getDogByBreed): ${error}`);
    }
};

const getDogByAge = async (req, res, next) => {
    try {
        return res.status(200).json('getDogByAge');
    } catch (error) {
        return res.status(500).json(`error (getDogByAge): ${error}`);
    }
};

const createDog = async (req, res, next) => {
    try {
        return res.status(201).json('createDog');
    } catch (error) {
        return res.status(500).json(`error (createDog): ${error}`);
    }
};

const editDog = async (req, res, next) => {
    try {
        return res.status(200).json('editDog');
    } catch (error) {
        return res.status(500).json(`error (editDog): ${error}`);
    }
};

const deleteDog = async (req, res, next) => {
    try {
        return res.status(200).json('deleteDog');
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
