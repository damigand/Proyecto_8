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
        img: 'https://res.cloudinary.com/dblbxi1qe/image/upload/v1732072033/Cats/aopscbiitqvmklwgqc2n.jpg',
    },
    {
        name: 'Felix',
        age: 4,
        breed: 'Bengal',
        img: 'https://res.cloudinary.com/dblbxi1qe/image/upload/v1732072097/Cats/yuizasxrz8aab7jkxgmw.webp',
    },
    {
        name: 'Izzy',
        age: 10,
        breed: 'British Shorthair',
        img: 'https://res.cloudinary.com/dblbxi1qe/image/upload/v1732072114/Cats/zyrobdlzasrnjmzsbga7.avif',
    },
];
