"use strict"

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify-es').default,
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	notify = require('gulp-notify'),
	filesize = require('filesize'),
	Client = require('ftp'),
	fs = require('fs');

sass.compiler = require('node-sass');

const cssFiles = [
	'alter_app/css_libs/**/*.css',
	'alter_app/css/**/*.css '
]

const jsFiles = [
	'alter_app/js/**/*.js'
]


function php() {
	return gulp.src("alter_app/include/**/*.php")
		.pipe(gulp.dest("../dist"));

}



gulp.task('php', php); 
gulp.task('sass', sw); 
gulp.task('csslibs', csslibs );
gulp.task(' watchFiles',  watchFiles);

function watchFiles(){
	gulp.watch('alter_app/sass/**/*.sass', sw);
	gulp.watch('alter_app/css/style.css', csslibs);
}

// function watchcss(){
// 	gulp.watch('alter_app/css/style.css', csslibs);
// }

const watch = gulp.parallel(watchFiles, browserSync);

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





function csslibs() {
	return gulp.src(cssFiles)
		
		// .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(concat('style.css'))
		.pipe(cssnano()) // Сжимаем
		.pipe(gulp.dest('alter_app/css')) // Выгружаем в папку alter_app/css
}

function cssout(){
	return gulp.src(cssFiles)
		
	// .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
	.pipe(concat('style.css'))
	.pipe(cssnano()) // Сжимаем
	.pipe(gulp.dest('../dist/css')) // Выгружаем в папку alter_app/css
}

function jsLibs(){
	return gulp.src(jsFiles)
		// .pipe(concat('code.js'))
		.pipe(uglify())
		.pipe(gulp.dest('alter_app/js')) 
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
	cssout();
	jsLibs();
	img();
	var buildFonts = gulp.src('alter_app/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('../dist/fonts'));

	var buildJs = gulp.src('alter_app/js/**/*') // Переносим скрипты в продакшен
		.pipe(gulp.dest('../dist/js'));

	var buildHtml = gulp.src('alter_app/*.php') // Переносим php в продакшен
		.pipe(gulp.dest('../dist'));
<<<<<<< HEAD
	var include = gulp.src('alter_app/includes/*.php') // Переносим php в продакшен
=======
	var include = gulp.src('includes/*.php') // Переносим php в продакшен
>>>>>>> 247df6e2c5c1e39e1c28a364eea5b1aae4a783a1
		.pipe(gulp.dest('../dist/includes'));

});


gulp.task('clear', function (callback) {
	return cache.clearAll();
})
