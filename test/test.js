/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isnan = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-nan-primitive', function tests() {

	it( 'should export a function', function test() {
		expect( isnan ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isnan( NaN ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			true,
			[],
			'5',
			function(){},
			null,
			{},
			5,
			new Number( 5 ),
			new Number( NaN ),
			undefined
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isnan( values[i] ) );
		}
	});

});
