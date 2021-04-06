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

module.exports = function(objectrepository) {
    const DogfoodModel = requireOption(objectrepository, 'DogfoodModel');

    return function(req, res, next) {
        if (
            typeof req.body.brand === 'undefined' ||
            typeof req.body.quantity === 'undefined' ||
            typeof req.body.energy === 'undefined' ||
            typeof res.locals.dog === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.dogfood === 'undefined') {
            res.locals.dogfood = new DogfoodModel();
        }

        if (Number.isNaN(parseInt(req.body.quantity, 10))) {
            return next(new Error('Mennyiség számmal kell hogy megadva legyen!'));
        }

        if (Number.isNaN(parseInt(req.body.energy, 10))) {
            return next(new Error('Energia számmal kell hogy megadva legyen!'));
        }

        res.locals.dogfood.brand = req.body.brand;
        res.locals.dogfood.quantity = parseInt(req.body.quantity, 10);
        res.locals.dogfood.energy = parseInt(req.body.energy, 10);
        res.locals.dogfood._eaten_by = res.locals.dog._id;

        res.locals.dogfood.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/dogfood/${res.locals.dog._id}`);
        });
    };
};