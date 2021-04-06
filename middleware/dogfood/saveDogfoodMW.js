/**
 * Using POST params save a dogfood to the database
 * If res.locals.dogfood is there, it's an update otherwise this middleware creates an entity
 * Redirects to /dogfood/:dogid after success
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if ((typeof req.body.brand === 'undefined') ||
            (typeof req.body.quantity === 'undefined') ||
            (typeof req.body.energy === 'undefined')) {
            return next();
        }

        res.redirect('/');
    };
};