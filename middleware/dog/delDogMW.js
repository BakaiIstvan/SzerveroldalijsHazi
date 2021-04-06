/**
 * Removes a dog from the database, the entity used here is: res.locals.dog
 * Redirects to / after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DogfoodModel = requireOption(objectrepository, 'DogfoodModel');

    return function(req, res, next) {
        if (typeof res.locals.dog === 'undefined') {
            return next();
        }

        DogfoodModel.deleteMany({_eaten_by: res.locals.dog._id}, (err, result) => {
            if (err) {
                return next(err);
            }

            console.log(result);
        });

        res.locals.dog.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};