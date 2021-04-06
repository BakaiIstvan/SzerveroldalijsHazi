/**
 * Using POST params update or save a dog to the database
 * If res.locals.dog is there, it's an update otherwise this middleware creates an entity
 * Redirects to / after success
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DogModel = requireOption(objectrepository, 'DogModel');

    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.age === 'undefined' ||
            typeof req.body.breed === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.dog === 'undefined') {
            res.locals.dog = new DogModel();
        }

        res.locals.dog.name = req.body.name;
        res.locals.dog.age = req.body.age;
        res.locals.dog.breed = req.body.breed;

        res.locals.dog.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};