const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Dogfood = db.model('Dogfood', {
    brand: String,
    quantity: Number,
    energy: Number,
    _eaten_by: {
        type: Schema.Types.ObjectId,
        ref: 'Dog'
    }
});

module.exports = Dogfood;