(function() {
	'use strict';

	angular
		.module('myApp', ['touchevents'])
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope'];

	function MainCtrl($scope) {
		/**
		 * Button touch start
		 */
		$scope.touchstartBtn = function ($event) {
			alert('Button touch start');
			console.log('touch start event', $event);
		};

		/**
		 * Button touch end
		 */
		$scope.touchendBtn = function ($event) {
			alert('Button touch end');
			console.log('touch end event', $event);
		};

		/**
		 * Button touch move
		 *
		 * @param $event {object} touch event
		 */
		$scope.touchmoveBtn = function ($event) {
			console.log('move event', $event);
		};
	}
})();