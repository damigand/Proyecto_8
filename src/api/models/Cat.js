const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        breed: { type: String, required: true },
        img: { type: String, trim: true, required: false },
        siblings: [{ type: Schema.Types.ObjectId, required: false, ref: 'cats' }],
    },
    {
        timestamps: true,
    }
);

const Cat = mongoose.model('cats', catSchema, 'cats');

module.exports = Cat;
