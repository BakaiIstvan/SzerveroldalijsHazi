/**
 * Load all dogfood from the database
 * The result is saved to res.locals.dogfoods
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        res.locals.dogfoods = [{
                _id: 'id1',
                brand: 'Pedigree',
                quantity: 100,
                energy: 25
            },
            {
                _id: 'id2',
                brand: 'DoggyFoody',
                quantity: 150,
                energy: 50
            }
        ];

        return next();
    };
};