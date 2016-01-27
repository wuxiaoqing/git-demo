/*
* @Author: Administrator
* @Date:   2016-01-27 13:31:00
* @Last Modified by:   Administrator
* @Last Modified time: 2016-01-27 13:49:46
*/

'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
/*var concat = require('gulp-concat');
var uglify = require('gulp-uglify');*/

gulp.task('style',function(){
  gulp.src('src/styles/*.less')
  .pipe(less())
  .pipe(gulp.dest('dist/styles'));
  });