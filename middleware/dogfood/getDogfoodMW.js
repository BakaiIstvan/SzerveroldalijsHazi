/**
 * Load a dogfood from the database using the :dogfoodid param
 * The result is saved to res.locals.dogfood
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DogfoodModel = requireOption(objectrepository, 'DogfoodModel');

    return function(req, res, next) {
        DogfoodModel.findOne(
            {
                _id: req.params.dogfoodid
            },
            (err, dogfood) => {
                if (err || !dogfood) {
                    return next(err);
                }

                res.locals.dogfood = dogfood;
                return next();
            }
        );
    };
};