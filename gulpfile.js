var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

// POJOS, plain old javscript objects
// task, src, dest, watch, pipe

gulp.task('compileSass', function() {
	gulp.src('./trendingColours.scss')
		.pipe(sass({
			outputStyle: 'compressed',
		}))
		.pipe(gulp.dest('./dest'))
});

gulp.task('compilePug', function(){
	gulp.src('./index.pug')
		.pipe(pug())
		.pipe(gulp.dest('./dest'))
});

gulp.task('watch' , function(){
	gulp.watch('./trendingColours.scss', ['compileSass'])
	gulp.watch('./index.pug',['compilePug'])
});


