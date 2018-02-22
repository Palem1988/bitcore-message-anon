'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-zclassic');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
