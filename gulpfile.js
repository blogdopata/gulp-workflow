var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload =  browserSync.reload;
var  autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function(){
	gulp.src('scss/app.scss')
		.pipe(autoprefixer())
		.pipe(sass({
			includePaths:['scss']
		}))
		.pipe(gulp.dest('app/css'));
});

gulp.task('servr',['sass'],function(){
	browserSync.init(["app/css/*.css","app/js/*.js","app/*.html"], {
		server:{
			baseDir: 'app'
		}
	})

});

gulp.task('watch',['sass','servr'], function(){
	gulp.watch(['scss/*.scss'], ['sass']);
});

gulp.task('default',['watch']);