const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ebqyg9', { useNewUrlParser: true });

module.exports = mongoose;