const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(process.env.DB_URL);
        console.log('DB connected');
    } catch (error) {
        console.log(`DB error: ${error}`);
    }
};

module.exports = { connectDB };
