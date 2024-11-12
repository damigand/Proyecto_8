require('dotenv').config();
const { connectDB } = require('./src/config/db');

const PORT = 3000;
const express = require('express');
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dogRouter = require('./src/api/routes/dog');
const catRouter = require('./src/api/routes/cat');
app.use('/dog', dogRouter);
app.use('/cat', catRouter);

app.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
});
