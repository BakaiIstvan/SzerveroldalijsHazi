/**
 * Load a dogfood from the database using the :dogfoodid param
 * The result is saved to res.locals.dogfood
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        res.locals.dogfood = {
            _id: 'id1',
            brand: 'Pedigree',
            quantity: 100,
            energy: 25
        };

        return next();
    };
};