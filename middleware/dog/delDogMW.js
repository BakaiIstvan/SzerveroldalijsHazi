/**
 * Removes a dog from the database, the entity used here is: res.locals.dog
 * Redirects to / after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};