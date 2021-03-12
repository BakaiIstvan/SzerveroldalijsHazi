/**
 * Load all dogfood from the database
 * The result is saved to res.locals.dogfoods
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};