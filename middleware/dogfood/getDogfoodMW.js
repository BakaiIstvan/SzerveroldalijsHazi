/**
 * Load a dogfood from the database using the :dogfoodid param
 * The result is saved to res.locals.dogfood
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};