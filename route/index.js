const renderMW = require('../middleware/renderMW');
const delDogfoodMW = require('../middleware/dogfood/delDogfoodMW');
const getAllDogfoodsMW = require('../middleware/dogfood/getAllDogfoodsMW');
const getDogfoodsMW = require('../middleware/dogfood/getDogfoodsMW');
const getDogfoodMW = require('../middleware/dogfood/getDogfoodMW');
const saveDogfoodMW = require('../middleware/dogfood/saveDogfoodMW');
const delDogMW = require('../middleware/dog/delDogMW');
const getDogsMW = require('../middleware/dog/getDogsMW');
const getDogMW = require('../middleware/dog/getDogMW');
const saveDogMW = require('../middleware/dog/saveDogMW');

const DogModel = require('../models/dog');
const DogfoodModel = require('../models/dogfood');

module.exports = function(app) {
    const objRepo = {
        DogModel: DogModel,
        DogfoodModel: DogfoodModel
    };

    app.use('/dog/new',
        saveDogMW(objRepo),
        renderMW(objRepo, 'neweditdog'));

    app.use('/dog/edit/:dogid',
        getDogMW(objRepo),
        saveDogMW(objRepo),
        renderMW(objRepo, 'neweditdog'));

    app.get('/dog/del/:dogid',
        getDogMW(objRepo),
        delDogMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/dogfood/:dogid',
        getDogMW(objRepo),
        getDogfoodsMW(objRepo),
        renderMW(objRepo, 'dogdetails'));

    app.use('/dogfood/:dogid/new',
        getDogMW(objRepo),
        saveDogfoodMW(objRepo),
        renderMW(objRepo, 'neweditfood'));

    app.get('/dogfood/:dogid/del/:dogfoodid',
        getDogMW(objRepo),
        getDogfoodMW(objRepo),
        delDogfoodMW(objRepo),
        renderMW(objRepo, 'dogdetails'));

    app.use('/',
        getAllDogfoodsMW(objRepo),
        getDogsMW(objRepo),
        renderMW(objRepo, 'index'));
};