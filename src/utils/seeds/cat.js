require('dotenv').config();
const mongoose = require('mongoose');
const Cat = require('../../api/models/Cat');

mongoose
    .connect(process.env.DB_URL)
    .then(async () => {
        const cats = await Cat.find();

        if (cats.length) {
            await Cat.collection.drop();
        }
    })
    .catch((error) => console.log(`error deleting data (cat): ${error}`))
    .then(async () => {
        await Cat.insertMany(data);
    })
    .catch((error) => console.log(`error creating data (cat): ${error}`))
    .finally(() => {
        console.log('cat seed done');
        mongoose.disconnect();
    });

const data = [
    {
        name: 'Paquito',
        age: 8,
        breed: 'Burmilla',
    },
    {
        name: 'Felix',
        age: 4,
        breed: 'Bengal',
    },
    {
        name: 'Izzy',
        age: 10,
        breed: 'British Shorthair',
    },
];
