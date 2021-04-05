const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Dog = db.model('Dog', {
    name: String,
    age: Number,
    breed: String
});

module.exports = Dog;