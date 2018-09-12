'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-anon');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
