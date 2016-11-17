var gulp = require('gulp');

var libs = './wwwroot/libs/';

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('copy-dependency:core-js', function () {
    gulp.src([
        'node_modules/core-js/client/*.js'
    ]).pipe(gulp.dest(libs + 'core-js'));
});
gulp.task('copy-dependency:zone.js', function () {
    gulp.src([
        'node_modules/zone.js/dist/*.js'
    ]).pipe(gulp.dest(libs + 'zone.js'));
});
gulp.task('copy-dependency:reflect-metadata', function () {
    gulp.src([
        'node_modules/reflect-metadata/reflect.js'
    ]).pipe(gulp.dest(libs + 'reflect-metadata'));
});
gulp.task('copy-dependency:systemjs', function () {
    gulp.src([
        'node_modules/systemjs/dist/*.js'
    ]).pipe(gulp.dest(libs + 'systemjs'));
});
gulp.task('copy-dependency:rxjs', function () {
    gulp.src([
        'node_modules/rxjs/**/*.js'
    ]).pipe(gulp.dest(libs + 'rxjs'));
});
gulp.task('copy-dependency:angular-in-memory-web-api', function () {
    gulp.src([
        'node_modules/angular-in-memory-web-api/**/*.js'
    ]).pipe(gulp.dest(libs + 'angular-in-memory-web-api'));
});
gulp.task('copy-dependency:angular', function () {
    gulp.src([
        'node_modules/@angular/**/*.js'
    ]).pipe(gulp.dest(libs + '@angular'));
});
gulp.task('copy-dependency:bootstrap', function () {
    gulp.src([
        'node_modules/bootstrap/dist/**/*.*'
    ]).pipe(gulp.dest(libs + 'bootstrap'));
});
gulp.task('copy-dependency:jquery', function () {
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js'
    ]).pipe(gulp.dest(libs + 'jquery'));
});

gulp.task('copy-dependency:angular2-datetime-picker', function () {

    gulp.src([
          'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css'
    ]).pipe(gulp.dest(libs + 'ng2-datetime'));
    gulp.src([
        'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js'
    ]).pipe(gulp.dest(libs + 'ng2-datetime'));

    gulp.src([
        'node_modules/bootstrap-timepicker/css/bootstrap-timepicker.min.css'
    ]).pipe(gulp.dest(libs + 'ng2-datetime'));
    gulp.src([
        'node_modules/bootstrap-timepicker/js/bootstrap-timepicker.min.js'
    ]).pipe(gulp.dest(libs + 'ng2-datetime'));

    gulp.src([
          'node_modules/ng2-datetime/**/*.js'
    ]).pipe(gulp.dest(libs + 'ng2-datetime'));

});

gulp.task('copy-dependencies', [
    'copy-dependency:core-js',
    'copy-dependency:zone.js',
    'copy-dependency:reflect-metadata',
    'copy-dependency:systemjs',
    'copy-dependency:rxjs',
    'copy-dependency:angular-in-memory-web-api',
    'copy-dependency:angular',
    'copy-dependency:bootstrap',
    'copy-dependency:jquery',
    'copy-dependency:angular2-datetime-picker'
]);

//var gulp = require('gulp');

//gulp.task('default', function () {
//    // place code for your default task here
//});

//var paths = {};
//paths.webroot = "wwwroot/";
//paths.npmSrc = "./node_modules/";
//paths.npmLibs = paths.webroot + "lib/npm/";

//gulp.task("copy-deps:systemjs", function () {
//    return gulp.src(paths.npmSrc + '/systemjs/dist/**/*.*', { base: paths.npmSrc + '/systemjs/dist/' })
//         .pipe(gulp.dest(paths.npmLibs + '/systemjs/'));
//});

//gulp.task("copy-deps:angular2", function () {
//    return gulp.src(paths.npmSrc + '/angular2/bundles/**/*.js', { base: paths.npmSrc + '/angular2/bundles/' })
//         .pipe(gulp.dest(paths.npmLibs + '/angular2/'));
//});

//gulp.task("copy-deps:es6-shim", function () {
//    return gulp.src(paths.npmSrc + '/es6-shim/es6-sh*', { base: paths.npmSrc + '/es6-shim/' })
//         .pipe(gulp.dest(paths.npmLibs + '/es6-shim/'));

//});
//gulp.task("copy-deps:es6-promise", function () {
//    return gulp.src(paths.npmSrc + '/es6-promise/dist/**/*.*', { base: paths.npmSrc + '/es6-promise/dist/' })
//         .pipe(gulp.dest(paths.npmLibs + '/es6-promise/'));
//});

//gulp.task("copy-deps:rxjs", function () {
//    return gulp.src(paths.npmSrc + '/rxjs/bundles/*.*', { base: paths.npmSrc + '/rxjs/bundles/' })
//         .pipe(gulp.dest(paths.npmLibs + '/rxjs/'));
//});

//gulp.task("copy-deps", ["copy-deps:rxjs", 'copy-deps:angular2', 'copy-deps:systemjs', 'copy-deps:es6-shim', 'copy-deps:es6-promise']);
