var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var ts = require('gulp-typescript');

// POJOS, plain old javscript objects
// task, src, dest, watch, pipe

gulp.task('compileSass', function() {
	gulp.src('./src/trendingColours.scss')
		.pipe(sass({
			outputStyle: 'compressed',
		}))
		.pipe(gulp.dest('./dest'))
});

gulp.task('compilePug', function(){
	gulp.src('./src/index.pug')
		.pipe(pug())
		.pipe(gulp.dest('./dest'))
});

gulp.task('compileJs', function(){
	gulp.src('./src/*.ts')
		.pipe(ts({
			module:'system'
		}))
		.pipe(gulp.dest('./dest'));
});

gulp.task('watch',['compileSass', 'compilePug', 'compileJs'] , function() {
	// watch for any new changes and compile again if needed
	gulp.watch('./src/trendingColours.scss', ['compileSass']);
	gulp.watch('./src/index.pug',['compilePug']);
	gulp.watch('./src/*.ts', ['compileJs']);
});


