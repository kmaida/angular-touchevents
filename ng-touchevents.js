(function() {
	'use strict';

	angular
		.module('ng-touchevents', [])
		.directive('ngTouchstart', ngTouchstart)
		.directive('ngTouchend', ngTouchend);

	//---- Touchstart

	ngTouchstart.$inject = [];

	function ngTouchstart() {

		ngTouchstartLink.$inject = ['$scope', '$elm', '$attrs'];

		/**
		 * ngTouchstart directive link function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 * @param $attrs {object} HTML attributes
		 */
		function ngTouchstartLink($scope, $elm, $attrs) {
			$elm.bind('touchstart', onTouchStart);

			function onTouchStart() {
				var method = $attrs.ngTouchstart;

				console.log('touchstart', method);

				$scope.$apply(function() {
					$scope.$eval(method);
				});
			}

			$scope.$on('$destroy', function() {
				$elm.unbind('touchstart', onTouchStart);
			});
		}

		return {
			restrict: 'A',
			link: ngTouchstartLink
		};
	}

	//---- Touchend

	ngTouchend.$inject = [];

	function ngTouchend() {

		ngTouchendLink.$inject = ['$scope', '$elm', '$attrs'];

		/**
		 * ngTouchend directive link function
		 *
		 * @param $scope {object}
		 * @param $elm {object} DOM element
		 * @param $attrs {object} HTML attributes
		 */
		function ngTouchendLink($scope, $elm, $attrs) {
			$elm.bind('touchend', onTouchEnd);

			function onTouchEnd() {
				var method = $attrs.ngTouchend;

				console.log('touchend', method);

				$scope.$apply(function() {
					$scope.$eval(method);
				});
			}

			$scope.$on('$destroy', function() {
				$elm.unbind('touchend', onTouchEnd);
			});
		}

		return {
			restrict: 'A',
			link: ngTouchendLink
		};
	}
})();