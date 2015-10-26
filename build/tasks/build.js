var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var notify = require("gulp-notify");


gulp.task('build', function () {
	return browserify({entries: 'src/index.js', debug: true})
	.transform(babel)
	.bundle()
	.on('error', notify.onError("Error: <%= error.message %>"))
	.pipe(source('index.js'))
	.pipe(gulp.dest('dist'));
});
