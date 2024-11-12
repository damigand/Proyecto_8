const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        breed: { type: String },
    },
    {
        timestamps: true,
    }
);

const Dog = mongoose.model('dogs', dogSchema, 'dogs');

module.exports = Dog;
