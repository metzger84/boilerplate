/**
  * @desc basic require.js configuration. setting base path for modules,
  * downloading jquery from cdn and testing out functionality.
*/

requirejs.config({
	baseUrl: 'javascript/modules',

	paths: {
      'jquery': "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

requirejs([ 'dummy', 'jquery' ], function( Dummy, $ ) {
	"use strict";

	console.log( new Dummy(), $ );
});