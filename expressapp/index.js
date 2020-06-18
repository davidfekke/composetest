const express = require('express');
const mongoose = require('mongoose');


const db = 'mongodb://mongo:27017/expressdata';

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const Animal = require('./models/Animal'); 

const app = express();
app.get('/', async (req, res) => {
    const animal = await Animal.findOne();
    res.json(animal);
    
});
app.listen(3000);