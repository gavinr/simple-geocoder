var expect = require('chai').expect;
var geocoder = require('../src/simple-geocoder.js');

describe('geocode', function() {
	it('should geocode a good address object', function(done) {
		geocoder.geocode({text:"1600 Pennsylvania Ave NW, Washington, DC 20500"}, function(success, locations) {
			expect(success).to.be.equal(true);

			expect(locations).to.have.property('x');
			expect(locations.x).to.be.equal(-77.038093585549746);

			expect(locations).to.have.property('y');
			expect(locations.y).to.be.equal(38.898723718725705);
			done();
		});
	});

	it('should geocode a good address string', function(done) {
		geocoder.geocode("1600 Pennsylvania Ave NW, Washington, DC 20500", function(success, locations) {
			expect(success).to.be.equal(true);

			expect(locations).to.have.property('x');
			expect(locations.x).to.be.equal(-77.038093585549746);

			expect(locations).to.have.property('y');
			expect(locations.y).to.be.equal(38.898723718725705);
			done();
		});
	});

	it('should fail on a bad address', function(done) {
		geocoder.geocode("sdfsdfsdfsdfsdfdsfdf", function(success, locations) {
			expect(success).to.be.equal(false);
			done();
		});
	});
});

describe('reverse', function() {
	it('should reverse geocode an object', function(done) {
		geocoder.reverse({
			x: -77.038093585549746,
			y: 38.898723718725705
		}, function(success, result) {
			expect(success).to.be.equal(true);
			expect(result).to.be.an('object');

			expect(result).to.have.property('Address');
			expect(result.Address).to.be.equal('700 Jackson Pl NW');

			expect(result).to.have.property('City');
			expect(result.City).to.be.equal('Washington');

			expect(result).to.have.property('Region');

			expect(result).to.have.property('Postal');
			expect(result.Postal).to.be.equal('20006');

			expect(result).to.have.property('CountryCode');
			expect(result.CountryCode).to.be.equal('USA');
			done();
		});
	});

	it('should reverse geocode a string', function(done) {
		geocoder.reverse('38.898723718725705,-77.038093585549746', function(success, result) {
			expect(success).to.be.equal(true);
			expect(result).to.be.an('object');

			expect(result).to.have.property('Address');
			expect(result.Address).to.be.equal('700 Jackson Pl NW');

			expect(result).to.have.property('City');
			expect(result.City).to.be.equal('Washington');

			expect(result).to.have.property('Region');

			expect(result).to.have.property('Postal');
			expect(result.Postal).to.be.equal('20006');

			expect(result).to.have.property('CountryCode');
			expect(result.CountryCode).to.be.equal('USA');
			done();
		});
	});

	it('should fail on reverse geocoding a bad string', function(done) {
		geocoder.reverse('99999,99999', function(success, result) {
			expect(success).to.be.equal(false);
			done();
		});
	});
});