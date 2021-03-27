/**
 * Using POST params update or save a dog to the database
 * If res.locals.dog is there, it's an update otherwise this middleware creates an entity
 * Redirects to / after success
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.age === 'undefined') ||
            (typeof req.body.breed === 'undefined')) {
            return next();
        }

        console.log("itt lesz save");
        console.log(red.body);

        res.redirect('/');

        next();
    };
};