"use strict";

requirejs.config({
	baseUrl: 'javascript/modules',

	paths: {
      'jquery': "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

requirejs([ 'test', 'jquery' ], function( Test, $ ) {
	new Test().foo();
});