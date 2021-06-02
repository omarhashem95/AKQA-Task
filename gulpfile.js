const gulp = require('gulp');
const sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');


gulp.task('styles', () => {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/styles/'));
});


gulp.task('js', function () {    
  return gulp.src(['assets/js/*.js'])
      .pipe(concat('scripts.js'))
      .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: true
    }))
      
      .pipe(gulp.dest('./build/optimized/'));
});

gulp.task('css', function () {    
  return gulp.src(['build/styles/*.css'])
      .pipe(concat('styles.min.css'))
      .pipe(cleanCss())
      .pipe(gulp.dest('./build/optimized/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/js/*.js', gulp.series('js') );
  gulp.watch('build/styles/*.css', gulp.series('css') );
  gulp.watch('./assets/sass/*.scss', gulp.series('styles') );
 });



gulp.task('default', gulp.series(['watch']));

