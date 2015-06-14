# angular-touchevents

Directives to bind `touchstart`, `touchend`, and `touchmove` to elements, with access to the `$event`. (Angular's 
native module for `ng-touch` does not include these events.)

* AngularJS v.1.4.0
* Gulp

## Usage

Add the `ng-touchevents.js` or `ng-touchevents.min.js` file to your project. To simulate touch events in your 
browser, use emulation settings in your developer's console.

### Module

Add `ng-touchevents` to your app's module setter.

```
angular.module('myApp', ['ng-touchevents']);
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
<button ng-touchstart="touchstartFunction($event)" 
		ng-touchend="touchendFunction($event)" 
		ng-touchmove="touchmoveFunction($event)">
	Touch Me</button>
```

## Demo

Demo available at [http://dev.kim-maida.com/angular-touchevents/demo](http://dev.kim-maida.com/angular-touchevents/demo)