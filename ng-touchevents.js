(function() {
	'use strict';

	angular
		.module('ng-touchevents', [])
		.directive('ngTouchstart', ngTouchstart)
		.directive('ngTouchend', ngTouchend)
		.directive('ngTouchmove', ngTouchmove);

	//---- Touchstart

	ngTouchstart.$inject = [];

	function ngTouchstart() {

		ngTouchstartLink.$inject = ['$scope', '$elm'];

		/**
		 * ngTouchstart directive link function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 */
		function ngTouchstartLink($scope, $elm) {
			$elm.bind('touchstart', $scope.ngTouchstart);

			$scope.$on('$destroy', function() {
				$elm.unbind('touchstart', $scope.ngTouchstart);
			});
		}

		return {
			restrict: 'A',
			scope: {
				ngTouchstart: '&'
			},
			link: ngTouchstartLink
		};
	}

	//---- Touchend

	ngTouchend.$inject = [];

	function ngTouchend() {

		ngTouchendLink.$inject = ['$scope', '$elm'];

		/**
		 * ngTouchend directive link function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 */
		function ngTouchendLink($scope, $elm) {
			$elm.bind('touchend', $scope.ngTouchend);

			$scope.$on('$destroy', function() {
				$elm.unbind('touchend', $scope.ngTouchend);
			});
		}

		return {
			restrict: 'A',
			scope: {
				ngTouchend: '&'
			},
			link: ngTouchendLink
		};
	}

	//---- Touchmove

	ngTouchmove.$inject = [];

	function ngTouchmove() {

		ngTouchmoveLink.$inject = ['$scope', '$elm'];

		/**
		 * ngTouchmove directive link function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 */
		function ngTouchmoveLink($scope, $elm) {
			$elm.bind('touchmove', onTouchMove);

			function onTouchMove($event) {
				$scope.ngTouchmove({$event: $event});
			}

			$scope.$on('$destroy', function() {
				$elm.unbind('touchstart', onTouchMove);
			});
		}

		return {
			restrict: 'A',
			scope: {
				ngTouchmove: '&'
			},
			link: ngTouchmoveLink
		};
	}
})();