var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('default', function(){

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
			.pipe(pug({pretty: true}))
			.pipe(gulp.dest('./dest'))
	});

	gulp.task('watchCss', function(){
		gulp.watch('trendingColours.scss', ['compileSass'])
	});

	gulp.task('watchHtml', function(){
		gulp.watch('index.pug', ['compilePug'])
	});

})	
