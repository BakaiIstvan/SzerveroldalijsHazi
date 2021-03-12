/**
 * Load a dog from the database using the :dogid param
 * The result is saved to res.locals.dog
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};