var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
 
gulp.task('sass: watch', function () {
  gulp.watch('./App.scss', ['sass']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('src/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('src/**/*.js', browserSync.reload); 
})

gulp.task('default', [ 'sass', 'sass: watch' ]);
