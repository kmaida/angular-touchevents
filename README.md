# angular-touchevents

Directives to add `touchstart`, `touchend`, and `touchmove` to elements, with access to the `$event`.

## Usage

Add the `ng-touchevents.js` file to your project.

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