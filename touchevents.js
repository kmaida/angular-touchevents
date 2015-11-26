(function() {
	'use strict';

	angular
		.module('touchevents', []); // setter

	angular
		.module('touchevents')      // getter
		.directive('touchstart', touchstart)
		.directive('touchend', touchend)
		.directive('touchmove', touchmove);

	//---- Touchstart

	function touchstart() {
		/**
		 * touchstart LINK function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 */
		function touchstartLink($scope, $elm) {
			/**
			 * on touchstart event
			 *
			 * @param $event {object} touchstart event obj
			 * @private
			 */
			function _onTouchStart($event) {
				$scope.touchstart({$event: $event});
			}

			$elm.bind('touchstart', _onTouchStart);

			$scope.$on('$destroy', function() {
				$elm.unbind('touchstart', _onTouchStart);
			});
		}

		return {
			restrict: 'A',
			scope: {
				touchstart: '&'
			},
			link: touchstartLink
		};
	}

	//---- Touchend

	function touchend() {
		/**
		 * touchend LINK function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 */
		function touchendLink($scope, $elm) {
			/**
			 * On touchend event
			 *
			 * @param $event {object} touchend event obj
			 * @private
			 */
			function _onTouchEnd($event) {
				$scope.touchend({$event: $event});
			}

			$elm.bind('touchend', _onTouchEnd);

			$scope.$on('$destroy', function() {
				$elm.unbind('touchend', _onTouchEnd);
			});
		}

		return {
			restrict: 'A',
			scope: {
				touchend: '&'
			},
			link: touchendLink
		};
	}

	//---- Touchmove

	function touchmove() {
		/**
		 * touchmove LINK function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 */
		function touchmoveLink($scope, $elm) {
			/**
			 * On touchmove event
			 *
			 * @param $event {object} touchmove event obj
			 * @private
			 */
			function _onTouchMove($event) {
				$scope.touchmove({$event: $event});
			}

			$elm.bind('touchmove', _onTouchMove);

			$scope.$on('$destroy', function() {
				$elm.unbind('touchmove', _onTouchMove);
			});
		}

		return {
			restrict: 'A',
			scope: {
				touchmove: '&'
			},
			link: touchmoveLink
		};
	}
})();