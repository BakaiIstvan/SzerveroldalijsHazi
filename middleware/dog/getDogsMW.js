/**
 * Load all dogs from the database
 * The result is saved to res.locals.dogs
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};