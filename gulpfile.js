var gulp = require('gulp'),
  livereload = require('gulp-livereload');

gulp.task('watch', function() {
  livereload.listen();
  var server = livereload();
  gulp.watch(['index.html', 'js/**/*.js', 'css/**/*.css'])
    .on('change', function(file) {
      server.changed(file.path);
    });
});