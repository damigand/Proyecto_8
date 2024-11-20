require('dotenv').config();
const mongoose = require('mongoose');
const Dog = require('../../api/models/Dog');

mongoose
    .connect(process.env.DB_URL)
    .then(async () => {
        const Dogs = await Dog.find();

        if (Dogs.length) {
            await Dog.collection.drop();
        }
    })
    .catch((error) => console.log(`error deleting data (dog): ${error}`))
    .then(async () => {
        await Dog.insertMany(data);
    })
    .catch((error) => console.log(`error creating data (dog): ${error}`))
    .finally(() => {
        console.log('Dog seed done');
        mongoose.disconnect();
    });

const data = [
    {
        name: 'Aspen',
        age: 3,
        breed: 'Beagle',
        img: 'https://res.cloudinary.com/dblbxi1qe/image/upload/v1732072181/Dogs/fndawwd9ewk0gqbcpzn7.webp',
    },
    {
        name: 'Bella',
        age: 9,
        breed: 'Bulldog',
        img: 'https://res.cloudinary.com/dblbxi1qe/image/upload/v1732072214/Dogs/vraczqvasrhg6ehd4on3.webp',
    },
    {
        name: 'Tango',
        age: 1,
        breed: 'Yorkshire terrier',
        img: 'https://res.cloudinary.com/dblbxi1qe/image/upload/v1732072226/Dogs/lwlxdr3hnjvcn09rvyae.jpg',
    },
];
