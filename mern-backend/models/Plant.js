const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true }); // Add timestamps to the schema

module.exports = mongoose.model("Plant", PlantSchema);
