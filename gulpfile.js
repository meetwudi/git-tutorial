var gulp = require('gulp'),
  livereload = require('gulp-livereload');

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch(['index.html', 'js/**/*.js', 'css/**/*.css'])
    .on('change', function(file) {
      server.changed(file.path);
    });
});