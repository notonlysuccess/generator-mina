const gulp = require('gulp')
const del = require('del')
const runSequence = require('run-sequence')
const babel = require('gulp-babel')

gulp.task('clean', () => {
  return del(['./dist/**'])
})

gulp.task('watch', () => {
  gulp.watch('./src/**/*.json', ['json'])
  gulp.watch('./src/assets/**', ['assets'])
  gulp.watch('./src/**/*.wxml', ['wxml'])
  gulp.watch('./src/**/*.wxss', ['wxss'])
  gulp.watch('./src/**/*.js', ['js'])
})

gulp.task('json', () => {
  return gulp.src('./src/**/*.json')
    .pipe(gulp.dest('./dist'))
})

gulp.task('assets', () => {
  return gulp.src('./src/assets/**')
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('wxml', () => {
  return gulp.src('./src/**/*.wxml')
    .pipe(gulp.dest('./dist'))
})

gulp.task('wxss', () => {
  return gulp.src('./src/**/*.wxss')
    .pipe(gulp.dest('./dist'))
})

gulp.task('js', () => {
  return gulp.src(['src/**/*.js', '!src/**/*.min.js'])
    .pipe(babel())
  //    .pipe(includeFile('h'))
    .pipe(gulp.dest('./dist')) 
})

gulp.task('dev', ['clean'], () => {
  runSequence('json', 'assets', 'wxml', 'wxss', 'wxml', 'js')
})
