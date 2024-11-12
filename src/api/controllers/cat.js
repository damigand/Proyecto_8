const Cat = require('../models/Cat');

const getAllCats = async (req, res, next) => {
    try {
        return res.status(200).json('getAllCats');
    } catch (error) {
        return res.status(500).json(`error (getAllCats): ${error}`);
    }
};

const getCatById = async (req, res, next) => {
    try {
        return res.status(200).json('getCatById');
    } catch (error) {
        return res.status(500).json(`error (getCatById): ${error}`);
    }
};

const getCatByName = async (req, res, next) => {
    try {
        return res.status(200).json('getCatByName');
    } catch (error) {
        return res.status(500).json(`error (getCatByName): ${error}`);
    }
};

const getCatByBreed = async (req, res, next) => {
    try {
        return res.status(200).json('getCatByBreed');
    } catch (error) {
        return res.status(500).json(`error (getCatByBreed): ${error}`);
    }
};

const getCatByAge = async (req, res, next) => {
    try {
        return res.status(200).json('getCatByAge');
    } catch (error) {
        return res.status(500).json(`error (getCatByAge): ${error}`);
    }
};

const createCat = async (req, res, next) => {
    try {
        return res.status(201).json('createCat');
    } catch (error) {
        return res.status(500).json(`error (createCat): ${error}`);
    }
};

const editCat = async (req, res, next) => {
    try {
        return res.status(200).json('editCat');
    } catch (error) {
        return res.status(500).json(`error (editCat): ${error}`);
    }
};

const deleteCat = async (req, res, next) => {
    try {
        return res.status(200).json('deleteCat');
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
