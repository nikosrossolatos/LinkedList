var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babel = require('babelify');
var notify = require("gulp-notify");
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var paths = require('../paths');

gulp.task('bundle', function () {
	return browserify({entries: 'src/index.js', debug: true})
	.transform(babel)
	.bundle()
	.on('error', notify.onError("Error: <%= error.message %>"))
	.pipe(source('linkedList.min.js'))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest(paths.output));
});
