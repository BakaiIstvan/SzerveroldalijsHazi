/**
 * Load all dogs from the database
 * The result is saved to res.locals.dogs
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        res.locals.dogs = [{
                _id: 'id1',
                name: 'Buksi',
                age: 5,
                breed: 'puli',
                eatendogfood: 8
            },
            {
                _id: 'id2',
                name: 'Beethoven',
                age: 8,
                breed: 'bernáthegyi',
                eatendogfood: 1
            }
        ];

        return next();
    };
};