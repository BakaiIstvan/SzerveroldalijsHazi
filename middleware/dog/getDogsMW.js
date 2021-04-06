/**
 * Load all dogs from the database
 * The result is saved to res.locals.dogs
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const DogModel = requireOption(objectrepository, 'DogModel');

    return function(req, res, next) {
        DogModel.find({}, (err, dogs) => {
            if (err) {
                return next(err);
            }

            const completedDogs = dogs.map((onedog) => {
                const dogfoodNumber = res.locals.alldogfood.filter(onedogfood => onedogfood._eaten_by.toString() === onedog._id.toString()).length;
                return {
                    _id: onedog._id,
                    name: onedog.name,
                    age: onedog.age,
                    breed: onedog.breed,
                    eatendogfood: dogfoodNumber
                }
            });

            res.locals.dogs = completedDogs;
            return next();
        });
    };
};