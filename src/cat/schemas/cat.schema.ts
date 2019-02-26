import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
        default: 1,
    },
    breed: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
