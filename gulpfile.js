'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-replace-task': 'replacetask',
    'gulp-watch' : 'watch'
  }
});
var pkg = require('./package.json');
var AUTOPREFIXER_BROWSERS = [
    '> 1%',
    'ie >= 9',
    'ie_mob >= 9',
    'Firefox >= 19',
    'chrome >= 24',
    'safari >= 6',
    'opera >= 15',
    'ios >= 6',
    'android >= 2.1',
    'bb >= 10'
];

// ***** jianji start ***** //
var publicRelative = './';
var publicHome = require(publicRelative + 'index.json');

gulp.task('styles', function() {
    var src = publicHome.css.src;

    for (var i = 0; i < src.length; i++) {
        src[i] = publicRelative + src[i];
    };

    var dist = publicRelative + publicHome.css.dist;

    console.log(src);

    return gulp.src(src)
        .pipe($.sass({
            precision: 10,
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS,remove: false}))
        .pipe(gulp.dest('.tmp'))
        .pipe($.if('*.css', $.csso()))
        .pipe(gulp.dest(dist))
        .pipe($.size({
            title: 'styles'
        }));
});

gulp.task('jshint', function() {

    var src = publicHome.js.src;
    var srcBase = publicRelative + publicHome.js.srcBase;

    for (var i = 0; i < src.length; i++) {
        src[i] = publicRelative + src[i];
    };

    return gulp.src(src, {
            base: srcBase
        })
        .pipe($.jshint('index.jshintrc'))
        .pipe($.jshint.reporter('jshint-stylish'));

});

gulp.task('scripts', ['jshint'], function() {

    var src = publicHome.js.src;

    var dist = publicRelative + publicHome.js.dist;

    return gulp.src(src)
        .pipe($.changed(dist))
        .pipe($.uglify())
        .pipe(gulp.dest(dist))
        .pipe($.size({
            title: 'scripts'
        }));
});

gulp.task('images', function() {
    var src = publicHome.image.src;
    for (var i = 0; i < src.length; i++) {
        src[i] = publicRelative + src[i];
    };

    var srcBase = publicRelative + publicHome.image.srcBase;
    var dist = publicRelative + publicHome.image.dist;

    return gulp.src(src, {
            base: srcBase
        })
        .pipe($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
        }))
        .pipe(gulp.dest(dist))
        .pipe($.size({
            title: 'images'
        }));

});

gulp.task('public', function() {
    runSequence(['styles', 'scripts', 'images']);
});

// ***** public end ***** //