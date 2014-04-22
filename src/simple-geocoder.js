/**
 * simple-geocoder
 */

/**
 * Module Dependencies
 */

var request = require('request');

/**
 * Geocoder
 */

function Geocoder() {}

/**
 * Geocoder prototype
 */
Geocoder.prototype = {
	geocode: function(opts, callback) {
		if (typeof opts === 'string') {
			opts = {
				text: opts
			};
		}

		// we always need f=json
		opts.f = 'json';

		var options = {
			uri: 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find',
			json: true,
			qs: opts
		};

		request(options, function(error, response, body) {
			if (!error && body && typeof(body) === 'object' && body.locations && body.locations.length > 0 && body.locations[0].feature && body.locations[0].feature.geometry) {
				if (callback) {
					callback(true, body.locations[0].feature.geometry);
				}
			} else {
				callback(false, "Problem geocoding.");
			}
		});
	},
	reverse: function(opts, callback) {
		if (typeof opts === 'string') {
			// reversing, because user input lat,lon ... but locator takes x,y (lon,lat)
			var y = opts.split(",")[0];
			var x = opts.split(",")[1];
			opts = {
				location: x + "," + y,
				distance: '200'
			};
		} else if (typeof opts === 'object' && opts.hasOwnProperty('x') && opts.hasOwnProperty('y')) {
			opts = {
				location: opts.x + "," + opts.y,
				distance: opts.distance || '200'
			};
		} else {
			if (callback) {
				callback(false, "Invalid input.");
			}
		}

		// we always need f=json
		opts.f = 'json';

		var options = {
			uri: 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode',
			json: true,
			qs: opts
		};

		request(options, function(error, response, body) {
			if (!error && body && typeof(body) === 'object' && body.hasOwnProperty('address')) {
				if (callback) {
					callback(true, body.address);
				}
			} else {
				callback(false, "Problem reverse geocoding.");
			}
		});
	}
};

module.exports = new Geocoder();