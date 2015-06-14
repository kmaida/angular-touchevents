// Dev dependencies
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

// JS
gulp.task('js', function() {
	gulp.src('ng-touchevents.js')
		.pipe(uglify())
		.pipe(rename('ng-touchevents.min.js'))
		.pipe(gulp.dest('./'));
});

// Build tasks
gulp.task('default', ['js']);