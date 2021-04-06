/**
 * Removes a dogfood from the database, the entity used here is: res.locals.dogfood
 * Redirects to /dogfood/:dogid after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.dogfood === 'undefined') {
            return next();
        }

        res.locals.dogfood.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/dogfood/${res.locals.dog._id}`);
        });
    };
};