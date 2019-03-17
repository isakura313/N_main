var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	//  cache    = require('gulp-cache'),
	notify = require('gulp-notify'),
	filesize = require('filesize');
	var Client = require('ftp');
	var fs = require('fs');

//добавить ftp

	function csslibs() {
		return gulp.src('alter_app/css/**/*.css') // Выбираем файл для минификации
			// .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
			.pipe(concat('style.css'))
			.pipe(cssnano()) // Сжимаем
			.pipe(gulp.dest('../dist/css')); // Выгружаем в папку alter_app/css
	}

	gulp.task('clean', function() {
		return del.sync('../dist'); // Удаляем папку ../dist перед сборкой
	});



	function img() {
		return gulp.src('alter_app/img/**/*') // Берем все изображения из alter_app
			.pipe(gulp.dest('../dist/img')); // Выгружаем на продакшен
	}


	gulp.task('default', function() {
		csslibs();
		img();
		var buildFonts = gulp.src('alter_app/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('../dist/fonts'));
	
		var buildJs = gulp.src('alter_app/js/**/*') // Переносим скрипты в продакшен
		.pipe(gulp.dest('../dist/js'));
	
		var buildHtml = gulp.src('alter_app/*.html') // Переносим HTML в продакшен
		.pipe(gulp.dest('../dist'));
	
	});


	// gulp.task('clear', function (callback) {
	// 	return cache.clearAll();
	// })
