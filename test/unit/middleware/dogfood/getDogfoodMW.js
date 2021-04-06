var expect = require('chai').expect;
var getDogfoodMW = require('../../../../middleware/dogfood/getDogfoodMW');

describe('getDogfood middleware ', function () {

  it('should set res.locals.dogfood with a dogfood object from db', function (done) {
    const mw = getDogfoodMW({
      DogfoodModel:{
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({_id: '47'});
          cb(null, 'mockdogfood')
        }
      }
    });

    const resMock = {
      locals: {}
    };

    mw({
      params:{
        dogfoodid: '47'
      }
    }, 
    resMock,
    (err) => {
      expect(err).to.be.eql(undefined);
      expect(resMock.locals).to.be.eql({dogfood: 'mockdogfood'});
      done();
    });
  });

  it('should call next with error when there is a database problem', function (done) {
    const mw = getDogfoodMW({
      DogfoodModel:{
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({_id: '47'});
          cb('adatbazishiba', null)
        }
      }
    });

    const resMock = {
      locals: {}
    };

    mw({
      params:{
        dogfoodid: '47'
      }
    }, 
    resMock,
    (err) => {
      expect(err).to.be.eql('adatbazishiba');
      done();
    });
  });

  it('should call next when dogfood was not found in the db', function (done) {
    const mw = getDogfoodMW({
      DogfoodModel:{
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({_id: '47'});
          cb(undefined, null)
        }
      }
    });

    const resMock = {
      locals: {}
    };

    mw({
      params:{
        dogfoodid: '47'
      }
    }, 
    resMock,
    (err) => {
      expect(err).to.be.eql(undefined);
      expect(resMock.locals).to.be.eql({});
      done();
    });
  });
});