(function() {
	angular
		.module('myApp', ['ng-touchevents'])
		.controller('MainCtrl', [
			'$scope',
			function($scope) {

				/**
				 * Button touch start
				 */
				$scope.touchstartBtn = function() {
					alert('Button touch start');
				};

				/**
				 * Button touch end
				 */
				$scope.touchendBtn = function() {
					alert('Button touch end');
				};

				/**
				 * Button touch move
				 *
				 * @param $event {object} touch event
				 */
				$scope.touchmoveBtn = function($event) {
					console.log('move event', $event);
				};
			}
		]);
})();