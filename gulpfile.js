'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    pug_chunks = require('gulp-pug'),
    webserver = require('gulp-webserver');

var nm = './node_modules/';

gulp.task('pug', function(){
  return gulp.src('builds/dev/*.pug')
    .pipe(pug({
        pretty: '  '
    }))
    .pipe(gulp.dest('builds/dist/'))
});

gulp.task('pug_chunks', function(){
  return gulp.src('builds/dev/chunks-pug/*.pug')
    .pipe(pug({
        pretty: '  '
    }))
    .pipe(gulp.dest('builds/dev/chunks-html/'))
});

gulp.task('sass', function () {
  return gulp.src('builds/dev/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 10 versions','> 5%'],
        cascade: false
      }))
    .pipe(gulp.dest('builds/dist/assets/kontur_bk/css/'));
});

gulp.task('css', function() {
  return gulp.src('builds/dev/css-common/*.css')
    .pipe(gulp.dest('builds/dist/assets/kontur_bk/css/'))
});

gulp.task('js', function() {
  return gulp.src('builds/dev/js/*.js')
    .pipe(gulp.dest('builds/dist/assets/kontur_bk/js/'))
});

gulp.task('img', function() {
  return gulp.src('builds/dev/img/**/*')
    .pipe(gulp.dest('builds/dist/assets/kontur_bk/img/'));
});

gulp.task('fonts', function() {
  return gulp.src('builds/dev/fonts/**/*')
    .pipe(gulp.dest('./builds/dist/assets/kontur_bk/fonts/'));
});

gulp.task('webserver', function() {
  return gulp.src('builds/dist/')
    .pipe(webserver({
      livereload: true,
      open: false,
      port: 8080
    }));
});

gulp.task('watch', function() {
  gulp.watch('builds/dev/css-common/*.css', ['css']);
  gulp.watch('builds/dev/js/**/*.js', ['js']);
  gulp.watch('builds/dev/img/**/*', ['img']);
  gulp.watch('builds/dev/fonts/**/*', ['fonts']);
  gulp.watch('builds/dev/**/*.pug', ['pug']);
  gulp.watch('builds/dev/chunks-pug/*.pug', ['pug_chunks']);
  gulp.watch('builds/dev/**/*.scss', ['sass']);
});

gulp.task('default', [
  'fonts',
  'css',
  'img',
  'js',
  'sass',
  'pug',
  'pug_chunks',
  'webserver',
  'watch'
]);
