var expect = require('chai').expect;
var getDogMW = require('../../../../middleware/dog/getDogMW');

describe('getDog middleware ', function () {

  it('should set res.locals.dog with a dog object from db', function (done) {
    const mw = getDogMW({
      DogModel:{
        findOne: (p1, cb) => {
          expect(p1).to.be.eql({_id: '47'});
          cb(null, 'mockdog')
        }
      }
    });

    const resMock = {
      locals: {}
    };

    mw({
      params:{
        dogid: '47'
      }
    }, 
    resMock,
    (err) => {
      expect(err).to.be.eql(undefined);
      expect(resMock.locals).to.be.eql({dog: 'mockdog'});
      done();
    });
  });

  it('should call next with error when there is a database problem', function (done) {
    const mw = getDogMW({
      DogModel:{
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
        dogid: '47'
      }
    }, 
    resMock,
    (err) => {
      expect(err).to.be.eql('adatbazishiba');
      done();
    });
  });

  it('should call next when dog was not found in the db', function (done) {
    const mw = getDogMW({
      DogModel:{
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
        dogid: '47'
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