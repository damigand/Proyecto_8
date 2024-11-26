const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        breed: { type: String, required: true },
        img: { type: String, trim: true, required: false },
        siblings: [{ type: Schema.Types.ObjectId, required: false, ref: 'dogs' }],
    },
    {
        timestamps: true,
    }
);

const Dog = mongoose.model('dogs', dogSchema, 'dogs');

module.exports = Dog;
