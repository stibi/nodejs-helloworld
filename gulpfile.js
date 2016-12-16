var gulp  = require('gulp'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('build', function() {
  return gulp.src('src/*.js')
    .pipe(gulp.dest('dist/'));
})
