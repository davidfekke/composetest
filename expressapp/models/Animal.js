const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    }
});

const UseAnimal = mongoose.model('Animal', AnimalSchema);

module.exports = UseAnimal;