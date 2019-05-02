var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	notify = require('gulp-notify'),
	filesize = require('filesize');
var Client = require('ftp');
var fs = require('fs');

sass.compiler = require('node-sass');

const cssFiles = [
	'alter_app/css_libs/**/*.css',
	'alter_app/css/**/*.css '
]


function php() {
	return gulp.src("alter_app/include/**/*.php")
		.pipe(gulp.dest("../dist"));

}
// gulp.task('sass:watch', function () {
// 	gulp.watch('alter_app/sass/**/*.sass', ['sass']);
//   });


gulp.task('php', php); 
gulp.task('sass', sw); 
gulp.task('csslibs', csslibs );
gulp.task(' watchFiles',  watchFiles);

function watchFiles(){
	gulp.watch('alter_app/sass/**/*.sass', sw);
}

function watchcss(){
	gulp.watch('alter_app/css/style.css', csslibs);
}

gulp.task('watch', watchFiles);
gulp.task('watch1', watchcss);

function watchFiles(){
	gulp.watch('alter_app/sass/**/*.sass', sw);
}

function sw(){
	return gulp.src('alter_app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('alter_app/css'));
		
}
gulp.task('multi', function(){
	var sass = gulp.src('alter_app/sass/**/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('alter_app/css'));
	var csslibs = gulp.src(cssFiles)
	// .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	.pipe(concat('style.css'))
	.pipe(cssnano()) // Сжимаем
	.pipe(gulp.dest('../dist/css')) // Выгружаем в папку alter_app/css

	return merge(sass, csslibs);
})


 

function csslibs() {
	return gulp.src(cssFiles)
		
		// .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(concat('style.css'))
		.pipe(cssnano()) // Сжимаем
		.pipe(gulp.dest('alter_app/css')) // Выгружаем в папку alter_app/css
}

gulp.task('clean', function () {
	return del.sync('../dist'); // Удаляем папку ../dist перед сборкой
});



function img() {
	return gulp.src('alter_app/img/**/*') // Берем все изображения из alter_app
		.pipe(gulp.dest('../dist/img')); // Выгружаем на продакшен
}


gulp.task('default', function () {
	sass();
	// sass_change();
	php();
	csslibs();
	img();
	var buildFonts = gulp.src('alter_app/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('../dist/fonts'));

	var buildJs = gulp.src('alter_app/js/**/*') // Переносим скрипты в продакшен
		.pipe(gulp.dest('../dist/js'));

	var buildHtml = gulp.src('alter_app/*.html') // Переносим HTML в продакшен
		.pipe(gulp.dest('../dist'));

});


gulp.task('clear', function (callback) {
	return cache.clearAll();
})
