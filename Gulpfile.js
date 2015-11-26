// Dev dependencies
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

// JS
gulp.task('js', function() {
	gulp.src('touchevents.js')
		.pipe(uglify())
		.pipe(rename('touchevents.min.js'))
		.pipe(gulp.dest('./'));
});

// Build tasks
gulp.task('default', ['js']);