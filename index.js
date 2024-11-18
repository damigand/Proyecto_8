require('dotenv').config();

const { connectDB } = require('./src/config/db');
connectDB();

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_secret: process.env.CLOUDINARY_SECRET,
    api_key: process.env.CLOUDINARY_KEY,
});

const PORT = 3000;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dogRouter = require('./src/api/routes/dog');
const catRouter = require('./src/api/routes/cat');
app.use('/dog', dogRouter);
app.use('/cat', catRouter);

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
});
