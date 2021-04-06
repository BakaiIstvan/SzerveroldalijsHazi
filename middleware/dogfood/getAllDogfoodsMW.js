/**
 * Load all dogfoods from the database
 * The result is saved to res.locals.alldogfood
 */
 const requireOption = require('../requireOption');

 module.exports = function(objectrepository) {
     const DogfoodModel = requireOption(objectrepository, 'DogfoodModel');
 
     return function(req, res, next) {
         DogfoodModel.find({}, (err, alldogfood) => {
            if (err) {
                return next(err);
            }

            res.locals.alldogfood = alldogfood;
            console.log(res.locals.alldogfood);
            return next();
         });
     };
 };