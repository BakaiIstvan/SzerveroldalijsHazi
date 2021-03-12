/**
 * Removes a dogfood from the database, the entity used here is: res.locals.dogfood
 * Redirects to /dogfood/:dogid after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};