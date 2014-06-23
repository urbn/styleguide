'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('modernizr', function () {
    gulp.src('./bower_components/modernizr/modernizr.js')
        .pipe(uglify())
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(gulp.dest('./public/js'));
});