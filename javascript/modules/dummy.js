/** 
  * @desc dummy module for testing purposes, safe to delete;
  * don't forget to delete object references in main.js as well.
*/

define( [], function(){
	"use strict";

	var F = function(){
		this.v = 'foobar';
	};

	F.prototype = {
		foo: function() {
			console.log( this, 'bar' );
		},

		bar: function() {
			console.log( this, 'foo' );
		}
	};

	return F;
});