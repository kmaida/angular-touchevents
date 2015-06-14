(function() {
	'use strict';

	angular
		.module('ng-touchevents', [])
		.directive('ngTouchstart', ngTouchstart)
		.directive('ngTouchend', ngTouchend)
		.directive('ngTouchmove', ngTouchmove);

	//---- Touchstart

	function ngTouchstart() {

		ngTouchstartLink.$inject = ['$scope', '$elm'];

		/**
		 * ngTouchstart directive link function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 */
		function ngTouchstartLink($scope, $elm) {

			/**
			 * on touchstart event
			 *
			 * @param $event {object} touchstart event obj
			 */
			function onTouchStart($event) {
				$scope.ngTouchstart({$event: $event});
			}

			$elm.bind('touchstart', onTouchStart);

			$scope.$on('$destroy', function() {
				$elm.unbind('touchstart', onTouchStart);
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

	function ngTouchend() {

		ngTouchendLink.$inject = ['$scope', '$elm'];

		/**
		 * ngTouchend directive link function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 */
		function ngTouchendLink($scope, $elm) {

			/**
			 * On touchend event
			 *
			 * @param $event {object} touchend event obj
			 */
			function onTouchEnd($event) {
				$scope.ngTouchend({$event: $event});
			}

			$elm.bind('touchend', onTouchEnd);

			$scope.$on('$destroy', function() {
				$elm.unbind('touchend', onTouchEnd);
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

	function ngTouchmove() {

		ngTouchmoveLink.$inject = ['$scope', '$elm'];

		/**
		 * ngTouchmove directive link function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 */
		function ngTouchmoveLink($scope, $elm) {

			/**
			 * On touchmove event
			 *
			 * @param $event {object} touchmove event obj
			 */
			function onTouchMove($event) {
				$scope.ngTouchmove({$event: $event});
			}

			$elm.bind('touchmove', onTouchMove);

			$scope.$on('$destroy', function() {
				$elm.unbind('touchmove', onTouchMove);
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