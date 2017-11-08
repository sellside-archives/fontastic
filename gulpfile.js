'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var eslint = require('gulp-eslint');

gulp.task('coverage', function() {
  return gulp.src(['*.js', 'utilities/**/*.js', 'views/**/*.js'], {ignore: ['gupfile.js']})
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', gulp.series('coverage', function test() {
  return gulp.src('test/*.js')
    .pipe(mocha({ reporter: 'spec' }))
    .pipe(istanbul.writeReports());
}));

gulp.task('lint', function() {
  return gulp.src(['*.js', '{public/views,test,utilities,views}/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('default', gulp.series(['lint', 'test']));
