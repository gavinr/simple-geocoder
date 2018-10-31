## ❗❗ Deprecated - Please use [arcgis-rest-js::arcgis-rest-geocoder](https://esri.github.io/arcgis-rest-js/api/geocoder/)


# simple-geocoder

A simple geocoder for [node](http://nodejs.org).

## Installation

	$ npm install simple-geocoder

## Example Usage

To geocode:

	var geocoder = require('simple-geocoder');
	geocoder.geocode('1600 Pennsylvania Ave NW, Washington, DC 20500', function(success, locations) {
		if(success) {
			console.log("Location: ", locations.x, locations.y);
		}
	});

To reverse-geocode:

	var geocoder = require('simple-geocoder');
	geocoder.reverse('38.898723718725705,-77.038093585549746', function(success, result) {
		if(success) {
			console.log("Location: ", result.Address, result.City, result.Region, result.Postal, result.CountryCode);
		}
	});

## Features

  * Simple geocoding and reverse geocoding, via object or string
  * Uses ArcGIS Online free geocoder. For details on allowed uses of the AGOL geocoder, see http://geocode.arcgis.com

## Philosophy

To provide a dead-simple geocoder package that utilizes the ArcGIS Online geocoder by default.

## More Information

  * http://geocode.arcgis.com/
  * https://developers.arcgis.com/en/features/geocoding/

## Running Tests

To run the test suite, first invoke the following command within the repo, installing the development dependencies:

	$ npm install

Then run the tests:

	$ grunt

## Contributors
  
Author: [Gavin Rehkemper](http://github.com/gavreh)

## License

Code for this package under the MIT license. Uses ArcGIS Online free geocoder by default. Please see http://geocode.arcgis.com for allowed usage.
