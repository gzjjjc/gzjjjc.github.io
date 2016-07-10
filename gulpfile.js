'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')({
    rename: {
        'gulp-replace-task': 'replacetask',
        'gulp-watch': 'watch'
    }
});
var pkg = require('./package.json');
var AUTOPREFIXER_BROWSERS = [
    //
    // Official browser support policy:
    // http://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
    //
    'Chrome >= 35', // Exact version number here is kinda arbitrary
    // Rather than using Autoprefixer's native "Firefox ESR" version specifier string,
    // we deliberately hardcode the number. This is to avoid unwittingly severely breaking the previous ESR in the event that:
    // (a) we happen to ship a new Bootstrap release soon after the release of a new ESR,
    //     such that folks haven't yet had a reasonable amount of time to upgrade; and
    // (b) the new ESR has unprefixed CSS properties/values whose absence would severely break webpages
    //     (e.g. `box-sizing`, as opposed to `background: linear-gradient(...)`).
    //     Since they've been unprefixed, Autoprefixer will stop prefixing them,
    //     thus causing them to not work in the previous ESR (where the prefixes were required).
    'Firefox >= 38', // Current Firefox Extended Support Release (ESR); https://www.mozilla.org/en-US/firefox/organizations/faq/
    // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
    // NOT the Edge app version shown in Edge's "About" screen.
    // For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
    // See also https://github.com/Fyrd/caniuse/issues/1928
    'Edge >= 12',
    'Explorer >= 9',
    // Out of leniency, we prefix these 1 version further back than the official policy.
    'iOS >= 8',
    'Safari >= 8',
    // The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
    'Android 2.3',
    'Android >= 4',
    'Opera >= 12'
];

// ***** test start ***** //
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
        .pipe($.autoprefixer({ browsers: AUTOPREFIXER_BROWSERS, remove: false }))
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

    console.log(src);
    console.log(dist);
    console.log(srcBase);

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

gulp.task('public', function(done) {
    runSequence(['styles', 'scripts', 'images']);
    done();
});

gulp.task('publicWatch', function (cb) {
    var scriptsPath = publicHome.js.src;
    for (var i = 0; i < scriptsPath.length; i++) {
        scriptsPath[i] = publicRelative + scriptsPath[i];
    };
    var stylesPath = publicHome.css.src;
    for (var i = 0; i < stylesPath.length; i++) {
        stylesPath[i] = publicRelative + stylesPath[i];
    };

    scriptsPath = scriptsPath.concat(stylesPath);

    $.watch(scriptsPath, function () {
        gulp.start('public');
    });
});

// ***** test end ***** //
