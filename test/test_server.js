var request = require('request'),
    expect = require('chai').expect,
    baseUrl = 'http://localhost:3000';

it('should post a single blob', function(done) {
  request.post(
    {
      url: baseUrl + '/api/books',
      form: {
        title: 'WDI 24',
        ranking: 5
      }
    },
    function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    }
  );
});

var request = require('request'),
    expect = require('chai').expect,
    baseUrl = 'http://localhost:3000';

// testing for all blobs
it('should return statusCode 200', function(done) {
  request(baseUrl + '/api/books', function(error, response, body) {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

// testing for a single blob
it('should return statusCode 200', function(done) {
    request(baseUrl + '/api/book/:id', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
});