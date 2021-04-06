/**
 * Load all dogfood from the database
 * The result is saved to res.locals.dogfoods
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DogfoodModel = requireOption(objectrepository, 'DogfoodModel');

    return function(req, res, next) {
        if (typeof res.locals.dog === 'undefined') {
            return next();
        }

        DogfoodModel.find({ _eaten_by: res.locals.dog._id }, (err, dogfoods) => {
            if (err) {
                return next(err);
            }

            res.locals.dogfoods = dogfoods;
            return next();
        });
    };
};