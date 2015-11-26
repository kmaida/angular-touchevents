# angular-touchevents

Directives to bind `touchstart`, `touchend`, and `touchmove` to elements, with access to the `$event`. (Angular's 
native module for `ng-touch` does not include these events.)

* AngularJS v.1.4.7
* Gulp

## Usage

Add the `touchevents.js` or `touchevents.min.js` file to your project. To simulate touch events in your 
browser, use emulation settings in your developer's console.

### Module

Add `touchevents` to your app's module setter.

```
angular.module('myApp', ['touchevents']);
```

### Controller

Add functions to your controller that you would like to execute on `touchstart`/`touchend`/`touchmove`.

```
$scope.touchstartFunction = function($event) {
	console.log('touch start:', $event);
};

$scope.touchendFunction = function($event) {
	console.log('touch end:', $event);
};

$scope.touchmoveFunction = function($event) {
	console.log('touch move:', $event);
};
```

### Template

Add the directive attributes to your element referencing the functions you defined in your controller.

```
<button touchstart="touchstartFunction($event)" 
		touchend="touchendFunction($event)" 
		touchmove="touchmoveFunction($event)">
	Touch Me</button>
```