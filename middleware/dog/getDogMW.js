/**
 * Load a dog from the database using the :dogid param
 * The result is saved to res.locals.dog
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        res.locals.dog = {
            _id: 'id1',
            name: 'Buksi',
            age: 5,
            breed: 'puli',
            eatendogfood: 8
        };

        return next();
    };
};